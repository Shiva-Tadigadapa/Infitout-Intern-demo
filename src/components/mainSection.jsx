import React from "react";
import styled from "styled-components";
import Filter from "./filter";
const MainSection = ({ isActive2 }) => {
  return (
    <>
      <div className="   relative   left-40 overflow-hidden top-20   ">
        <table className="  ">
          <tr className="  text-sm flex   justify-evenly bg-[#e8effb] ">
            <div className="border-b-[#99b8ed] w-[100%] flex items-center justify-evenly    border-x-transparent border-t-transparent border p-2">
              <th className="pr-10">OI Buildup</th>
              <th className="pr-3">IV</th>
              <th className="pr-2">OI</th>
              <th className="pr-4">Volume</th>
              <th className="pr-2">Chng%</th>
              <th className="pr-28 ">LTP</th>
              <th></th>
            </div>
            <div className="  absolute -top-[1%]  ml-[40px] flex items-center justify-center bg-[#efe8fb]  pb-2.5 px-6 pt-2.5   border border-l-[#d5bcfe] border-b-[#d5bcfe] border-r-[#d5bcfe]">
              <th className="">Strike</th>
            </div>
            <div className="border-b-[#99b8ed] w-[100%] flex items-center justify-evenly    border-x-transparent border-t-transparent border p-2 ">
              <th></th>
              <th className="pl-32">LTP</th>
              <th className="pl-">Chng%</th>
              <th className="pl-">Volume</th>
              <th className="pl-">OI</th>
              <th className="pl-">IV</th>
              <th className="pl-">OI Buildup</th>
            </div>
          </tr>

          <Wio className="  text-sm block  overflow-scroll  relative   h-[399px]">
            {Array.from({ length: 12 }).map((_, index) =>
              index >= 10 ? (
                <>
                  <tr className="   flex  justify-evenly    text-center    ">
                    <div className="flex border-[1.5px] border-b-[#efe8fb] bg-[#ffffff]  p-1.5 px-2.5 py-2.5">
                      <td className="pr-10 ">LongBuildup</td>
                      <td className="pr-5">9.4</td>
                      <td className="pr-5">35k</td>
                      <td className="pr-5">1.25k</td>
                      <td className=" pr-5 text-[#35b367]">+123.5%</td>
                      <td className="pr-5">1,245.3</td>

                      <div className="flex  justify-center  items-center">
                        <p className="border bg-[#ffffff] ml-4  pr-1.5 pl-1.5">
                          B
                        </p>
                        <p className="border bg-[#ffffff] ml-3 pl-1.5 pr-1.5">
                          S
                        </p>
                      </div>
                    </div>
                    <div className=" border border-x-[#d5bcfe] border-b-[#d5bcfe] bg-[#efe8fb]  ">
                      <td className="  px-6  py-3  bg-[#efe8fb]  ">
                        {17700 + index * 50}
                      </td>
                    </div>

                    <div className="flex border  border-b-[#f8eb77] bg-[#fffacd]  p-1.5 px-2.5 py-2.5 items-center justify-center ">
                      <div className="flex  justify-center  items-center">
                        <p className="border bg-[#ffffff] ml-4  pr-1.5 pl-1.5">
                          B
                        </p>
                        <p className="border bg-[#ffffff] ml-3 pl-1.5 pr-1.5">
                          S
                        </p>
                      </div>
                      <td className="pl-6 ">15.3</td>
                      <td className="pl-5 text-[#ff6b6b] ">-44.2%</td>
                      <td className="pl-8">982</td>
                      <td className="pl-8">1.4k</td>
                      <td className="pl-5">9.2</td>
                      <td className="  ">Long unwiding</td>
                    </div>
                  </tr>
                </>
              ) : (
                <tr className="   flex  justify-evenly    text-center    ">
                  <div className="flex border-[1.5px] border-b-[#f8eb77] bg-[#fffacd]  p-1.5 px-2.5 py-2.5">
                    <td className="pr-10 ">LongBuildup</td>
                    <td className="pr-5">9.4</td>
                    <td className="pr-5">35k</td>
                    <td className="pr-5">1.25k</td>
                    <td className=" pr-5 text-[#35b367]">+123.5%</td>
                    <td className="pr-5">1,245.3</td>

                    <div className="flex  justify-center  items-center">
                      <p className="border bg-[#ffffff] ml-4  pr-1.5 pl-1.5">
                        B
                      </p>
                      <p className="border bg-[#ffffff] ml-3 pl-1.5 pr-1.5">
                        S
                      </p>
                    </div>
                  </div>
                  <div className=" border border-x-[#d5bcfe] border-b-[#d5bcfe] bg-[#efe8fb]  ">
                    <td className="  px-6  py-3  bg-[#efe8fb]  ">
                      {17700 + index * 50}
                    </td>
                  </div>

                  <div className="flex border  bg-[#ffffff]  p-1.5 px-2.5 py-2.5 items-center justify-center ">
                    <div className="flex  justify-center  items-center">
                      <p className="border bg-[#ffffff] ml-4  pr-1.5 pl-1.5">
                        B
                      </p>
                      <p className="border bg-[#ffffff] ml-3 pl-1.5 pr-1.5">
                        S
                      </p>
                    </div>
                    <td className="pl-6 ">15.3</td>
                    <td className="pl-5 text-[#ff6b6b] ">-44.2%</td>
                    <td className="pl-8">982</td>
                    <td className="pl-8">1.4k</td>
                    <td className="pl-5">9.2</td>
                    <td className="  ">Long unwiding</td>
                  </div>
                  {index >= 1 ? (
                    <></>
                  ) : (
                    <div className=" absolute top-20">
                      {isActive2 ? <Filter /> : <></>}
                    </div>
                  )}
                </tr>
              )
            )}
          </Wio>
        </table>
      </div>
    </>
  );
};

export default MainSection;

const Wio = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;
