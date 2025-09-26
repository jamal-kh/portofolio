"use client";
import Home from "./sections/home/Home";

export default function App() {


  return (
    <div className="w-[700px] min-w-[350px] h-[400px]  shadow-2xl p-[20px] rounded-[15px] ">
      <div className="border h-[100%] p-[20px] rounded-[10px]">

        <div className="flex h-[100%]">
         <Home />
        </div>
      </div>
    </div>
  );
}
