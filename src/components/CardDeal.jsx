import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] text-justify mt-4` }>
          {" "}
          Anda adalah seorang programmer yang berdedikasi dan bersemangat dalam
          dunia teknologi dan pengembangan perangkat lunak. Anda mengejar karier
          dalam dunia pemrograman karena Anda tertarik dengan kemampuan untuk
          menciptakan solusi perangkat lunak yang inovatif dan bermanfaat bagi
          orang lain.
        </p>
        <Button className="mt-5" />
      </div>
        <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%]"/>
        </div>
    </section>
  );
};

export default CardDeal;
