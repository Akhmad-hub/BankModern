import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row  items-center py-[6px] px-4 bg-slate-600 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span> DISCOUNT FOR {""}
            <span className="text-white">1 MOUNT </span> ACCOUNT
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            {" "}
            The Next <br className="sm:block hidden"></br>
            <span className="bg-gradient-to-t from-slate-400 ">
              Generation{" "}
            </span>{" "}
            <br></br>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 ml-5">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 text-justify`}>
          saya merupakan lulusan informatika yang memiliki pengalaman dalam
          bidang desain, web programing, dan analisis data. berbagai bahasa
          programan yang telah saya pelajari seperti js,php,python dll, dan
          berbagai framework laravell, react, vue, django, dll
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted></GetStarted>
      </div>
    </section>
  );
};

export default Hero;
