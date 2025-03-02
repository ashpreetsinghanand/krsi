
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 xl:mt-7 ">
      <Link to="/">
        <img src="/logo.png" className="h-10" alt="" />
      </Link>

      <div className="flex gap-x-4">
        <Link
          to="/about"
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#010205] border-[2px] rounded-full flex justify-center items-center font-[500]"
        >
          About Us
        </Link>
        <div
          onClick={() =>
            document
              .getElementById("marketplace")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#010205] border-[2px] rounded-full flex justify-center items-center font-[500]"
        >
          Marketplace
        </div>

        <div
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-[700] w-[156px] h-12 border-[#010205] border-[2px] rounded-full flex justify-center items-center font-[500]"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Navbar