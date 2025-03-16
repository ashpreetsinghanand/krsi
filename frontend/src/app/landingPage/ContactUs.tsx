
import Navbar from './Navbar';
import Collab from './Collab';
import Newsletter from './Newsletter';
import Footer from './Footer';

function ContactUs() {
  return (
    <div className="bg-[url('/Background_Noise.png')] bg-cover bg-center">
      <Navbar />
      <div className="px-5">
        <div>
          <p className="text-[20px] text-[#9B9B9C] font-[500] line-height text-center mt-[100px]">
            Feel free to reach out to us for queries, partnerships or anything
            else.
          </p>
          <p className="text-[50px] font-[700] text-[#010205]  line-height text-center mt-[30px]">
            Contact Us
          </p>
          <p className="text-center mt-[70px] text-[24px] font-[700]">
            Join Community{" "}
          </p>
          <div className="mt-12 flex justify-center items-center gap-x-12">
            <img className='w-[51px] cursor-pointer' src="/linkedinLogo.png" alt="" />
            <img className='w-[54px] cursor-pointer' src="/XLogo.png" alt="" />
            <img className='w-[61px] cursor-pointer' src="/TelegramLogo.png" alt="" />
            <img className='w-[67px] cursor-pointer' src="/DiscordLogo.png" alt="" />
            <img className='w-[89px] cursor-pointer' src="/MediumLogo.png" alt="" />
          </div>
        </div>
        <Collab />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
}

export default ContactUs