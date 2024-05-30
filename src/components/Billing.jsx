import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

      <div className="{layout.sectionInfo">
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block" />
          Billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Anda adalah seorang programmer yang berdedikasi dan bersemangat dalam
          dunia teknologi dan pengembangan perangkat lunak. Anda mengejar karier
          dalam dunia pemrograman karena Anda tertarik dengan kemampuan untuk
          menciptakan solusi perangkat lunak yang inovatif dan bermanfaat bagi
          orang lain.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple}  alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google}  alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>

      <div />
    </section>
  );
};

export default Billing;
