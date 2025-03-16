import Collab from "./Collab";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

function About() {
  return (
    <div className="bg-[url('/Background_Noise.png')] bg-cover bg-center font-sans-serif">
      <Navbar />

      <div className="px-5  backdrop-blur-lg bg-white/30">
        <div className="mt-20 px-40">
          <div className="text-center text-[20px] font-[700]">About Us</div>
          <div className="text-[43px] font-[700] text-center">Who we are</div>
          <div className="text-[#4D4E4F] text-[20px] mt-10">
            Krsi, World's largest emerging grain marketplace that bridges the
            gap between sellers and buyers of agro produce goods by providing
            complete quantity, quality, and on time payment reliability. Our
            customer base includes farmers, farmer producer organisations
            (FPOs), financial institutions, SME Agri processors, commodity
            traders and corporate agribusinesses.
          </div>

          <div className="text-[#4D4E4F] text-[20px] mt-10">
            We empower farmers by prioritizing distress sales of their produce
            and enhance income capacity by 20-30% through an integrated globally
            accessible platform addressing three priority concerns.
          </div>

          <div className="text-[#4D4E4F] text-[20px] mt-7 font-[500]">
            <ul className="list-disc list-inside pl-0">
              <li className="leading-tight">
                Storage Solutions: Our unique near-farm storage solutions help
                farmers capitalise on price appreciation during the off-season.
              </li>
              <li>
                Financing Solutions: By offering credit to our clients who have
                stored agro commodities in our warehouse network, we ensure
                their working capital remains unobstructed and safe.
              </li>
              <li>
                Marketplace : Our fully transparent marketplace help these
                farmers, FPOs, and small aggregators to list and sell their
                produce with timely payment assurance and resolve the working
                capital issues of the farmers and buyers.
              </li>
            </ul>
          </div>
        </div>

        {/* contact us */}
        <Collab />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
}

export default About;
