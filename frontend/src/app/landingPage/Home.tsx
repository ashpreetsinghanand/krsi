import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Collab from "./Collab";

function Home() {

  const [hoveredSection, setHoveredSection] = useState<number | null>(null);


  const sections = [
    {
      title: "Storage",
      description:
        "Our unique near-farm storage solutions help farmers capitalize on price appreciation during the off-season.",
      image: "/storage.png",
    },
    {
      title: "Finance",
      description:
        "By offering credit to our clients who have stored agro commodities in our warehouse network, we ensure their working capital remains unobstructed & safe.",
      image: "/finance.jpg",
    },
    {
      title: "Trade",
      description:
        "Our fully transparent marketplace help these farmers, FPOs, and small traders to list and sell their produce with timely payment assurance and resolve the working capital issues.",
      image: "/trade.jpg",
    },
  ];



  return (
    <div className="bg-[url('/Background_Noise.png')] bg-cover bg-center">
      <Navbar />

      <div className=" px-5">
        <div className="mt-12 flex gap-x-5 relative">
          {/* Parent container should be relative */}
          <div className="relative">
            <img
              className="w-full rounded-2xl"
              src="/revolution+farming.png"
              alt=""
            />
            {/* Positioned absolutely relative to the image */}
            <div
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="absolute cursor-pointer h-[56px] w-[219px] rounded-full flex items-center justify-center bottom-[23%] left-1/4 transform -translate-x-1/2"
            ></div>
          </div>
        </div>

        {/* <div className="flex justify-center rounded-xl ">
        <div className="bg-white w-[140px] -ml-3 -mt-10 h-[138px] rounded-xl flex justify-center items-center">
          kk
        </div>
      </div> */}

        {/* Marketplace Section */}
        <div id="marketplace" className="mt-[100px] bg-white px-5">
          <div className="flex text-[40px] justify-center font-[700]">
            World's Largest Emerging Grain Marketplace
          </div>
          <div className="flex text-[20px] justify-center font-[400] text-[#4D4E4F] mt-6">
            Storage, Finance and Trade on the World's first and largest Grain
            Marketplace
          </div>
          <img src="/dashboard.png" alt="" />
        </div>

        {/* storage,finance,trade info section */}
        <div className="text-center text-[40px] font-[700] mt-16">
          Our Services
        </div>
        <div className="flex gap-x-4 mt-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative h-[650px] cursor-pointer transition-all duration-300 w-1/3`}
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full rounded-3xl"
              />

              <div
                className={`absolute bottom-3 h-[200px] bg-blend-color bg-white left-3 right-3 p-4 shadow-md transition-opacity duration-300 ${
                  hoveredSection === index ? "rounded-2xl" : "rounded-2xl"
                }`}
              >
                <div className="text-[24px] font-bold flex justify-between">
                  <div>{section.title}</div>
                </div>

                <p className="text-[18px] leading-tight mt-2 font-sans">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* contact us */}
        <Collab />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
