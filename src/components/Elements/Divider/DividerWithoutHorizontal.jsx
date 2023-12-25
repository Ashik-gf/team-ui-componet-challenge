import React from "react";

const DividerWithoutHorizontal = () => {
  return (
    <div className=" bg-white shadow-md rounded-md w-[1100px] mx-auto p-4 ">
      <h1 className=" text-start p-2 font-bold">Divider Without Text</h1>
      <div className="flex flex-row w-full border-opacity-50">
        <div className=" grid w-[1000px] mx-auto h-20  bg-[#E2E8F0] rounded-xl place-content-center text-2xl text-[#64748B]">
          content
        </div>
        <div className=" flex flex-col items-center gap-2 mx-4">
          <div className="h-[80px] w-[2px] bg-[#E2E8F0]"></div>
        </div>
        <div className=" grid w-[1000px] mx-auto h-20  bg-[#E2E8F0] rounded-xl place-content-center text-2xl text-[#64748B]">
          content
        </div>
      </div>
    </div>
  );
};

export default DividerWithoutHorizontal;
