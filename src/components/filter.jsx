const Filter = ({  }) => {
  

    const hideout = () => {
        isactive(false)
    }
    return (
    <>
      <div className="bg-white  shadow-lg">
        <div className="bg-[#2c57f5]  text-white text-xm">
          <div className="flex   items-center justify-center ">
            <div className="py-2.5 pr-14 pl-6">
              <p>Max profit</p>
              <p>24,000/-</p>
            </div>
            <div className="py-2.5 pr-14">
              <p>Max loss</p>
              <p>Unlimited</p>
            </div>
            <div className="py-2.5 pr-14">
              <p>Risk:Reward</p>
              <p>NA</p>
            </div>
            <div className="py-2.5 pr-14">
              <p>Probility</p>
              <p>32%</p>
            </div>
            <div className="py-2.5 pr-6">
              <p>Break even</p>
              <p> &gt;38124.2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex  p-3 text-gray-600">
            <p className="pl-2 pr-32">instrument</p>
            {/* <div className="flex mr-3"> */}
            <p className="pr-4">B/S</p>
            <p className="pr-4">Type</p>
            <p className="pr-8">Qty</p>
            <p className="pr-8">Price</p>
            <p className="pr-4">Trigger</p>
            {/* </div> */}
          </div>
          <div className="flex bg-[#f9f9f9] p-1.5  items-center text-sm justify-evenly">
            <p>NIFTY 18MAY23 18200 CE</p>
            <p className="w-5 h-6 flex justify-center items-center bg-[#86c6e6]">
              B
            </p>
            <p className="bg-[#2c57f5] flex justify-center items-center w-14 h-6 text-white">
              MIS
            </p>
            <input type="text" defaultValue={50} className="border border-gray-300 p-1 w-16  h-6" />
            <input type="text" defaultValue={120.5} className="border border-gray-300 p-1  w-16 -ml-2 h-6"/>
            <input type="text" className="border border-gray-300 p-1 w-16 -ml-2 h-6"/>
            <p className="text-[#2c57f5]">SL</p>
            <p className="text-[#2c57f5]">Tgt</p>
          </div>
          <div className="flex bg-[#ffff] p-1.5  items-center text-sm justify-evenly">
            <p>NIFTY 18MAY23 18200 CE</p>
            <p className="w-5 h-6 flex justify-center items-center bg-[#ffa8a8]">
              S
            </p>
            <p className="bg-[#2c57f5] w-14 h-6 flex justify-center items-center text-white">
              NRML
            </p>
            <input type="text" defaultValue={50} className="border p-1 border-gray-300  w-16  h-6" />
            <input defaultValue={98.1} type="text" className="border p-1 border-gray-300  w-16 -ml-2 h-6"/>
            <input type="text"className="border p-1 border-gray-300  w-16 -ml-2 h-6"/>
            <p className="text-[#2c57f5]">SL</p>
            <p className="text-[#2c57f5]">Tgt</p>
          </div>
          <div className="flex bg-[#f9f9f9] p-1.5  items-center text-sm justify-evenly">
            <p>NIFTY 18MAY23 18200 CE</p>
            <p className="w-5 h-6 flex justify-center items-center bg-[#86c6e6]">
              B
            </p>
            <p className="bg-[#2c57f5] w-14 h-6 flex justify-center items-center text-white">
              MIS
            </p>
            <input type="text" defaultValue={50} className="border p-1 border-gray-300  w-16  h-6" />
            <input defaultValue={80.3} type="text" className="border border-gray-300 p-1 w-16 -ml-2 h-6"/>
            <input type="text" className="border border-gray-300 p-1 w-16 -ml-2 h-6"/>
            <p className="text-[#2c57f5]">SL</p>
            <p className="text-[#2c57f5]">Tgt</p>
          </div>
        </div>
        <div className="mt-20">

        <hr />
        <div className="flex  justify-between items-center p-5">
            <div className=" text-sm text-gray-800">
                <p>Margin required: 2,43,630.3</p>
                <p>Available funds: 12,00,000,00</p>
            </div>
            <div>
                <button className="bg-[#ffd700] px-3 py-1.5">Auto hedge</button>
            </div>
            <div className="flex  items-center justify-center">
                <button onClick={hideout} className="border border-[#2c57f5] text-[#2c57f5] px-3 py-1.5">Close basket</button>
                <button className="bg-[#2c57f5] text-white px-3 py-1.5 ml-2">Place order</button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
