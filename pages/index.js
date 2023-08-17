import axios from "axios";
import useSWR from "swr";
import { memory, reaction, verbal, visual } from "@/assets";
import Image from "next/image";
import Loader from "@/components/Loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

const fetch = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(JSON.parse(res.data));
    return JSON.parse(res.data);
  } catch (err) {
    console.log(err);
  }
};

export default function Home() {
  const { data, error } = useSWR("/api/staticdata", fetch);
  if (error || !data) {
    return <Loader />;
  }

  return (
    <section className="w-[100vw] h-[100vh] flex  justify-center items-center ">
      {/* Container */}
      <div className="w-full sm:w-[600px] bg-white flex flex-col sm:flex-row shadow-2xl rounded-b-lg md:rounded-r-lg h-full sm:h-auto ">
        {/* Left */}
        <div className="w-full h-full md:w-1/2 bg-[#5b3ef9]  md:rounded-lg rounded-b-lg  py-10 flex flex-col justify-center items-center gap-7 text-[#b0a9d4]">
          <span className=" text-[#b0a9d4] text-2xl">Your Result</span>
          <div className="flex flex-col justify-center items-center w-[150px] h-[150px] shadow-[1px_37px_41px_6px_rgba(0,0,0,0.2)_inset] rounded-full gap-2 text-sm font-bold">
            <h1 className="text-white text-6xl font-bold">76</h1> of 100
          </div>
          <h2 className="text-white font-bold text-xl">Great</h2>
          <span className="text-center px-[3.5rem] text-xs font-bold">
            You scored higher than 65% of people who have taken these tests
          </span>
        </div>

        {/* Right */}
        <div className="w-full h-full md:w-1/2 bg-white  py-5 px-5 gap-5 flex flex-col rounded-b-lg md:rounded-r-lg">
          <span className="text-black text-xl font-bold">Summary</span>
          <div className="flex flex-col gap-2">
            {/* Reaction */}
            <div className="flex justify-between items-center bg-red-100 p-4  rounded-lg">
              <span className="flex gap-2 items-center text-red-500 font-bold">
                <Image src={reaction} alt="Reaction" /> {data[0].category}
              </span>
              <span className="text-[#b0a9d4]">
                <b className="text-black">{data[0].score}</b>&nbsp;/&nbsp;100
              </span>
            </div>

            {/* Memory */}
            <div className="flex justify-between items-center bg-yellow-100 p-4  rounded-lg">
              <span className="flex gap-2 items-center text-yellow-500 font-bold">
                <Image src={memory} alt="Memory" /> {data[1].category}
              </span>
              <span className="text-[#b0a9d4]">
                <b className="text-black">{data[1].score}</b>&nbsp;/&nbsp;100
              </span>
            </div>

            {/* Verbal  */}
            <div className="flex justify-between items-center bg-green-100 p-4  rounded-lg">
              <span className="flex gap-2 items-center text-green-500 font-bold">
                <Image src={verbal} alt="Verba;" /> {data[2].category}
              </span>
              <span className="text-[#b0a9d4]">
                <b className="text-black">{data[2].score}</b>&nbsp;/&nbsp;100
              </span>
            </div>

            {/* Visual */}

            <div className="flex justify-between items-center bg-purple-100 p-4  rounded-lg">
              <span className="flex gap-2 items-center text-purple-500 font-bold">
                <Image src={visual} alt="Visual" />
                {data[3].category}
              </span>
              <span className="text-[#b0a9d4]">
                <b className="text-black">{data[3].score}</b>&nbsp;/&nbsp;100
              </span>
            </div>

            {/*  */}
          </div>
          <button className="w-full py-3 bg-[#303b5a] rounded-full flex items-center justify-center  text-white hover:bg-[#5b3ef9]">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
