import React, { useState } from "react";
import Filter from "./filter";
import MainSection from "./mainSection";
const NavBar2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const handleFocus = () => {
    setIsActive(false);
  };
  const handleFocus1 = () => {
    setIsActive1(false);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsActive(true);
    }
  };

  const handleBlur1 = (e) => {
    if (e.target.value === "") {
      setIsActive1(true);
    }
  };

  const hideOut = () => {
    setIsActive2(!isActive2);
  };
  const hideout2 = () => {
    setIsActive3(!isActive3);
  };

  return (
    <>
    <div className="flex justify-around  font-serif items-center mt-10">
      <div className="flex justify-between">
        <div className="relative mr-3">
          <input
            type="text"
            className="w-40 p-1.5 pt-3 border-gray-600 border-[1px] focus:outline-none"
            onFocus={handleFocus}
            onBlur={handleBlur}
            defaultValue="NIFTY" // Set the default input value as "Nifty"
            />
          <label
            className={`absolute left-3 transition-all duration-300 ${
              isActive
              ? "top-2 text-gray-700"
              : "text-gray-500 text-sm top-0.5 bg-white transform translate-y-[-50%]"
            }`}
            >
            Scrip
          </label>
        </div>
        <div className="relative mr-5 ">
          <input
            type="text"
            className="w-40 p-1.5 pt-3 border-gray-600 border-[1px] focus:outline-none"
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            defaultValue="18 May 2023" // Set the default input value as "Nifty"
            />
          <label
            className={`absolute left-3 transition-all duration-300 ${
                isActive1
                ? "top-2 text-gray-700"
                : "text-gray-500 text-sm top-0.5 bg-white transform translate-y-[-50%]"
            }`}
          >
            Exp
          </label>
        </div>
        <div className="mr-3 ">
          <div>
            <p className="text-gray-500 text-sm">Spot</p>
          </div>
          <div className="flex justify-center items-center tracking-tighter font-medium">
            <p className="mr-2">18,245.3</p>
            <p className="text-sm text-[#27ae60]">0.35%</p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-gray-500 text-sm" >Fut</p>
          </div>
          <div className="flex justify-center items-center tracking-tighter font-medium">
            <p className="mr-2">18,251.1</p>
            <p className="text-sm text-[#27ae60]">0.35%</p>
          </div>
        </div>
      </div>
      <div className="flex text-gray-500 -ml-20">
        <div className="mr-3">
          <p className="text-sm">Max pain</p>
          <p className="text-black  tracking-normal font-medium">18,200</p>
        </div>
        <div className="ml-6">
          <p className="text-sm">PCR</p>
          <p className="text-black tracking-normal font-medium">0.92</p>
        </div>
        <div className="ml-6">
          <p className="text-sm">Support</p>
          <p className="text-black tracking-normal font-medium">18100</p>
        </div>
        <div className="ml-8">
          <p className="text-sm">Resistance</p> 
          <p className="text-black tracking-normal font-medium">18500</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-8 cursor-pointer   relative">
          <img src="" alt="" />
          <button className=" text-lg" onClick={hideout2}>Filters</button>
          {
      isActive3? (
        
        <>
        <div className="bg-white right-4 top-8  absolute z-[1]     p-5 shadow-lg">
          <div className="flex  font-bold justify-between text-base">
            <p>Filters</p>
            <button  className=" font-thin"onClick={hideout2}>X</button>
          </div>
          <div className="text-xs mt-3.5">
            <p  className="text-xs text-black">LTP range</p>
            <div className="flex justify-around mt-1.5    items-center ">
              <input type="text" className="w-24 pl-2 border-gray-400 focus:outline-none mr-4 py-1.5 border" placeholder="Minimum LTP"/>
              -
              <input type="text" placeholder="Maximum LTP"  className="border-gray-400 ml-4 pl-2 w-24 py-1.5 focus:outline-none border"/>
            </div>
          </div>
          <div className="mt-5 flex text-xs justify-between  items-center">
            <p>LTP change % by</p>
            <input type="text" placeholder="Today Open"  className="border-gray-400 pl-2 w-24 py-1.5  focus:outline-none border"/>
          </div>
          <div className="mt-5 flex text-xs justify-between  items-center">
            <p>Specific strike</p>
            <input type="text" placeholder=""  className="border-gray-400 pl-2 w-24 py-1.5 focus:outline-none border"/>
          </div>
          <div className="flex mt-5 text-xs justify-between items-center">
            <p>Display</p>  
            <div className="flex justify-center items-center m-0 p-0">

            <input type="checkbox"  className="mr-1 accent-[#610bef] "/>
            <label className="text-xs">Calls</label>
            <input type="checkbox" className=" accent-[#610bef] ml-2 mr-1"/>
            <label className="text-xs">Puts</label>
            
            </div>
          </div>
          <hr className="mt-5 "/>
          <div className="flex   justify-end text-xs mt-4">
           <button onClick={hideout2} className="border border-[#2c57f5] text-[#2c57f5] text-xs px-3.5 py-1.5">Reset</button>
          <button onClick={hideout2} className="bg-[#2c57f5] text-white text-xs ml-3 px-3.5 py-1.5">Apply</button>
        </div>
        </div>
        </>
      ):(<> </>)
    }
        </div>
        <div className="flex ">

        <div onClick={hideOut} className="bg-[#2c57f5] hover:cursor-pointer text-white/90 text-sm px-9 py-2">
          <div>
            <button>Basket</button>
          </div>
        </div>
        <div className="felx -ml-3  -mt-2  items-center justify-center">
            <span className=" flex  items-center justify-center  bg-yellow-300 h-[20px] w-[20px]   rounded-full text-xs">3</span>
        </div>
        </div>
      </div>
    </div>
    <div className=" float-right flex mr-20 mt-4">
        <div className="bg-[#2c57f5] text-cyan-50 px-7 py-1.5  rounded-lg text-sm">
            <p>LTP</p>
        </div>
        <div className="bg-gray-300 text-black/90 ml-3.5 px-5 py-1.5 text-sm rounded-lg">
            <p>
                Greeks
            </p>
        </div>
    </div>
    <MainSection    isActive2 = {isActive2}/>
    
    </>
  );
};

export default NavBar2;
