

const Footer = () => {
  return (
    <div className="my-12 flex justify-between">
      <div className="w-[624px]">
        {" "}
        <img src="/logo.png" className="h-10" alt="" />
        <div className="mt-7 text-[#000000] text-[14px] font-roboto">
          Krsi is the world’s largest emerging grain marketplace that bridges
          the gap between sellers & buyers of agro produce goods by providing
          complete quantity, quality, and on-time payment reliability.
        </div>
        <div className="mt-12 flex justify-start items-center gap-x-[10px]">
          <img
            className="w-[25px] cursor-pointer"
            src="/linkedinLogo.png"
            alt=""
          />
          <img className="w-[25px] cursor-pointer" src="/XLogo.png" alt="" />
          <img
            className="w-[25px] cursor-pointer"
            src="/TelegramLogo.png"
            alt=""
          />
          <img
            className="w-[30px] cursor-pointer"
            src="/DiscordLogo.png"
            alt=""
          />
          <img
            className="w-[40px] cursor-pointer"
            src="/MediumLogo.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[465px] flex justify-between pr-10">
        <div className="">
          <div className="text-[#192031] text-[18px] font-[500]">Company </div>
          <div className="text-[#9B9B9C] text-[14px] mt-10">About Us</div>
          <div className="text-[#9B9B9C] text-[14px] mt-3">Contact Us</div>
          <div className="text-[#9B9B9C] text-[14px] mt-3">FAQ</div>
        </div>
        <div>
          <div className="text-[#192031] text-[18px] font-[500]">Product </div>
          <div className="text-[#9B9B9C] text-[14px] mt-10">Marketplace</div>
          <div className="text-[#9B9B9C] text-[14px] mt-3">Copyright</div>
        </div>
        <div>
          <div className="text-[#192031] text-[18px] font-[500]">
            Resources{" "}
          </div>
          <div className="text-[#9B9B9C] text-[14px] mt-10">How it Works</div>
          <div className="text-[#9B9B9C] text-[14px] mt-3">Newsletter</div>
        </div>
      </div>
    </div>
  );
}

export default Footer