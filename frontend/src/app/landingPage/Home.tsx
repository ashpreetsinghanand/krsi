import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Collab from "./Collab";

function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const getWidth = (index: number) => {
    if (hoveredSection === null) return "w-1/3"; // Default width when nothing is hovered
    return hoveredSection === index ? "w-1/2" : "w-1/4"; // Expanded/contracted on hover
  };

  const sections = [
    {
      title: "Storage",
      description:
        "Typically, commodity prices are at their lowest immediately after harvest and increase during the off-season. Our unique near-farm storage solutions help farmers capitalize on price appreciation during the off-season.",
      image: "/storage.png",
    },
    {
      title: "Finance",
      description:
        "By offering credit to our clients who have stored agro commodities in our warehouse network, we ensure their working capital remains unobstructed and safe.",
      image: "/finance.jpg",
    },
    {
      title: "Trade",
      description:
        "Our fully transparent marketplace help these farmers, FPOs, and small aggregators to list and sell their produce with timely payment assurance and resolve the working capital issues of the farmers and buyers.",
      image: "/trade.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is a warehouse receipt?",
      answer:
        "A document that proves ownership of goods stored in a warehouse, detailing the quantity, quality, and type of commodity.",
    },
    {
      question: "Who issues a warehouse receipt?",
      answer:
        "Warehouse receipts are issued by licensed warehouse operators or storage facilities as proof of deposited goods.",
    },
    {
      question: "What types of goods can be covered by a warehouse receipt?",
      answer:
        "Warehouse receipts can cover a variety of commodities, including grains, metals, and other stored goods.",
    },
    {
      question: "How can a warehouse receipt be used for financing?",
      answer:
        "Warehouse receipts can be used as collateral for loans, allowing owners to secure financing while their goods remain in storage.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <Navbar />

      <div className="backdrop-blur-lg  bg-white/30 px-5">
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
        <div className="text-center text-[40px] font-[700] mt-16">Our Services</div>
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
                className={`absolute bottom-3 h-[150px] bg-blend-color bg-white left-3 right-3 p-4 shadow-md transition-opacity duration-300 ${
                  hoveredSection === index ? "rounded-2xl" : "rounded-2xl"
                }`}
              >
                <div className="text-lg font-bold flex justify-between">
                  <div>{section.title}</div>
                </div>

                <p className="text-sm mt-2">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* faq section */}

        <div id="faq" className="flex mt-12">
          <div className="w-1/2 px-20">
            <div className="text-[48px]">FAQs</div>
            <div className="text-[16px] text-[#4D4E4F] mt-10">
              Warehouse receipt financing is a financial instrument that allows
              individuals to use their stored goods as collateral to secure
              loans.
            </div>
          </div>
          <div className="w-1/2 px-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-6 cursor-pointer  ${
                  index === 0
                    ? "border-t-[2px] border-b-[2px]"
                    : "border-b-[2px]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="text-[24px] font-[500] w-[448px]">
                    {faq.question}
                  </div>
                  <div className="text-[24px]">
                    {activeIndex === index ? (
                      <img src="/remove.svg" />
                    ) : (
                      <img src="/add.svg" />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="text-[#4D4E4F] mt-3">{faq.answer}</div>
                )}
              </div>
            ))}
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

export default Home;
