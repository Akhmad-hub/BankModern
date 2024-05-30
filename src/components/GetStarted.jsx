import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-br from-blue-400 p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Get
            </span>
          </p>
            <img
              src={arrowUp}
              alt="arow"
              className="w-[23px] h-[23px] mr-2 object-contain"
            />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Started
          </span>
        </p>
      </div>
      
    </div>
  );
};

export default GetStarted;
