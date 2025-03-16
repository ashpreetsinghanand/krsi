
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 pl:mt-7 bg-white  px-5">
      <Link to="/">
        <img src="/logo.png" className="h-10" alt="" />
      </Link>

      <div className="flex gap-x-4">
        <Link
          to="/about"
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#9B9B9C] border-[2px] rounded-full flex justify-center items-center"
        >
          About Us
        </Link>
        <Link
          to="/feature"
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#9B9B9C] border-[2px] rounded-full flex justify-center items-center"
        >
          Features
        </Link>
        <Link
          to="/faq"
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#9B9B9C] border-[2px] rounded-full flex justify-center items-center"
        >
          FAQ
        </Link>
        {/* <div
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#9B9B9C] border-[2px] rounded-full flex justify-center items-center font-[500]"
        >
          Contact Us
        </div> */}
        <Link
         
          to="/contact"
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#9B9B9C] border-[2px] rounded-full flex justify-center items-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar