import Collab from "./Collab";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

function Feature() {
  return (
    <div className="bg-[url('/Background_Noise.png')] bg-cover bg-center font-sans">
      <Navbar />
      <div className="px-5 font-sans ">
        <p className="text-[20px] font-[500] text-[#9B9B9C] text-center pt-[120px]">
          Integrating the advantages of blockchain and AI/ML, some unique
          features are:
        </p>
        <div className="text-[58px] font-[700] text-[#010205] text-center mt-[10px]">
          Features
        </div>

        <div className="mt-[107px] flex justify-center items-start gap-5">
          <div className="bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] w-[521px] h-[256px] rounded-[16px] p-5 border-2 border-[#A2DA21] relative overflow-hidden">
            <p className="text-[#28341C] text-[24px] font-[700]">
              Blockchain Powered
            </p>
            <p className="w-[311px] text-[18px] text-[#333333]">
              Blockchain's immutable database for collateral ownership prevents
              fraud in sectors plagued by issues like multiple lending and fake
              receipts.
            </p>
            <img
              className="absolute right-0 -bottom-[1px]  w-[158px] h-[154px]"
              src="/blockchain.png"
              alt="Blockchain Powered"
            />
          </div>

          <div className="w-[397px] h-[256px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] ">
            <p className="text-[#28341C] text-[24px] font-[700]">
              No Guarantors
            </p>
            <p className="text-[18px] text-[#333333]">
              Enjoy the ease of securing a loan without a guarantor, offering
              you quicker access to funds with fewer requirements.
            </p>
          </div>

          <div className="w-[251px] h-[401px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] relative overflow-hidden">
            <p className="text-[#28341C] text-[24px] font-[700]">
              Instant Approval
            </p>
            <p className="text-[18px] text-[#333333]">
              No waiting, no worry—our instant approval process gets you from
              application to approval in record time.
            </p>
            <img
              className="absolute right-0 -bottom-[1px]  w-[177px] h-[177px]"
              src="/Credit_Approval.png"
              alt="Instant Approval"
            />
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <div className="-mt-32 w-[251px] h-[541px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] relative overflow-hidden">
            <p className="text-[#28341C] text-[24px] font-[700] leading-tight">
              Smart Contract Enabled
            </p>
            <p className="mt-4 text-[18px] text-[#333333]">
              The Smart Contract lending platform automates transactions like
              approval, margin calls, and loan transfers when specific
              conditions are met.
            </p>
            <img
              className="absolute right-0 -bottom-[1px]  w-[220px] h-[210px]"
              src="/SmartContract.png"
              alt="Smart Contract"
            />
          </div>

          <div>
            <div className="-mt-32 w-[668px] h-[259px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] relative overflow-hidden">
              <p className="text-[#28341C] text-[24px] font-[700]">
                Real-Time Monitoring
              </p>
              <p className="text-[18px] text-[#333333] w-[420px]">
                Lenders risk fraud relying on agencies for collateral reports;
                our AI/ML solution offers real-time monitoring, reducing this
                risk.
              </p>
              <img
                className="absolute right-10 -bottom-[0px]  w-[247px] h-[170px]"
                src="/Monitoring_System.png"
                alt="Real-Time Monitoring"
              />
            </div>

            <div className="mt-6 w-[668px] h-[256px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] relative overflow-hidden">
              <p className="text-[#28341C] text-[24px] font-[700]">
                Low Interest Rates
              </p>
              <p className="text-[18px] text-[#333333]">
                Secure affordable loans with our platform's low-interest rates,
                designed to make your financial journey smooth and stress-free.
              </p>
              <img
                className="absolute right-20 -bottom-[1px]  w-[180px] h-[145px]"
                src="/Low_Interest.png"
                alt="Low Interest"
              />
            </div>
          </div>

          <div className="mt-3 w-[251px] h-[400px] bg-gradient-to-br from-[#C3F096] to-[#E6EDD6] p-5 border-2 rounded-[16px] border-[#A2DA21] relative overflow-hidden">
            <p className="text-[#28341C] text-[24px] font-[700]">
              Social Impact
            </p>
            <p className="text-[18px] text-[#333333] font-sans">
              Our loans create lasting social impact, empowering communities and
              fostering positive change through responsible lending.
            </p>
            <img
              className="absolute right-0 -bottom-3 w-[169.5px] h-[172px]"
              src="/Socail_Impacr.png"
              alt="Social Impact"
            />
          </div>
        </div>

        <Collab />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default Feature;
