

const Footer = () => {
  return (
    <div className="my-12 flex justify-between">
      <div className="w-[464px]">
        {" "}
        <img src="/logo.png" className="h-10" alt="" />
        <div className="mt-7 text-[#9B9B9C]">
          Krsi, World’s first and largest grain marketplace, bridges the gap
          between sellers and buyers of agricultural produce providing complete
          assurance on quantity, quality, and payments.
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