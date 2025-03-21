

function Newsletter() {
  return (
    <div className="flex mt-10">
      <div className="w-1/2 ">
        <div className="flex justify-center mt-2  gap-x-5 items-center w-[214px] h-[56px] text-[#090909] font-[500] rounded-full border-[#B8B4B4] border-[1px] text-[20px] drop-shadow-xl">
          <div className="font-[500]">newsletter</div>
          <img src="/forward_arrow.svg" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-[30px] text-[#010205] font-[500] line-height">
          Subscribe to our newsletter to get the latest updates on missions
          projects & initiatives.
        </div>
        <div className="mt-15 flex gap-x-7 items-center">
          <input
            className="placeholder:text-[#4D4E4F] placeholder:font-[500] h-12 border-[#EEEEEE] border-[2px] w-[70%] rounded-full  px-4"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <div className="flex justify-center items-center w-[209px] border-[1px] gap-x-6 border-[#B8B4B4] rounded-full h-[56px] text-[20px] font-[500]">
            <div className="font-[500]">Subscribe</div>
            <img src="/forward_arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter