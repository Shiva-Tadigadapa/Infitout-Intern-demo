import NavBar2 from "../components/navBar2"
import MainSection from "./mainSection";
import Filter from "./filter";
import img from "./logo.jpg"

function NavBar({}) {
  return (
    <>
      <nav className=" shadow-lg navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="flex justify-around items-center    ">
            <div>

          <img
            src={
              img
            }
            alt="logo"
            width="100%"
            height="100%"
            className="p-2.5"
            />
            </div>
            <div className="flex ">
              <ul className="flex  tracking-[0.1px] justify-evenly items-center">
                <li className="mr-4">Dashboard</li>
                <li className="mr-4 text-[#2c57f5]">Option chain</li>
                <li className="mr-4">Strategy builder</li>
                <li className="mr-4">Positions</li>
                <li className="">Order book</li>
              </ul>
            </div>
          <div className="flex items-center">
              <div className="felx  items-center mr-5">
                <div className=" ">
                  <div className="flex justify-end">
                    <p className=" text-[0.70rem]">NIFTY</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-xs text-[#27ae60]">0.35%</p>
                    <p>18,245.32</p>
                  </div>
                </div>
              </div>
              <div className="felx  items-center mr-5">
                <div className=" ">
                  <div className="flex justify-end">
                    <p className=" text-[0.70rem]">BANKNIFY</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="mr-2 text-xs text-[#27ae60]">0.7%</p>
                    <p>39,156.1</p>
                  </div>
                </div>
              </div>
              <div className="felx  items-center mr-5">
                <div className=" ">
                  <div className="flex justify-end">
                    <p className=" text-[0.70rem]">INDIA VIX</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-xs text-[#ff6b6b]">-10.9%</p>
                    <p>12.12</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="felx items-center">
            <div>
                <p>Profile</p>
            </div>
          </div>
        </div>
      </nav>
      <div>
    
      <NavBar2/>
   
      </div>
    </>
  );
}
export default NavBar;
