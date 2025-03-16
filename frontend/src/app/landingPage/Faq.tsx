import { useState } from "react";
import Collab from "./Collab";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

const Faq = () => {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
          question:
            "What types of goods can be covered by a warehouse receipt?",
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
    <div className="bg-[url('/Background_Noise.png')] bg-cover bg-center font-sans">
      <Navbar />
      <div className="px-5 mt-[100px] w-full">
        {/* faq section */}
        <p>
          {" "}
          <div className="text-[48px] text-center">FAQs</div>
        </p>
        <div id="faq" className="flex mt-12  justify-center">
          {/* <div className="w-1/2 px-20">
            <div className="text-[48px]">FAQs</div>
            <div className="text-[16px] text-[#4D4E4F] mt-10">
              Warehouse receipt financing is a financial instrument that allows
              individuals to use their stored goods as collateral to secure
              loans.
            </div>
          </div> */}

          <div className="w-[1400px] px-40">
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
                  <div className="text-[24px] font-[500] ">{faq.question}</div>
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

        <Collab />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
}

export default Faq