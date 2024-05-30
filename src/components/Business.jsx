import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the bussines, <br className="sm:block hidden" />
          Well handle the money.{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 text-justify`}>
          Anda adalah seorang programmer yang berdedikasi dan bersemangat dalam
          dunia teknologi dan pengembangan perangkat lunak. Anda mengejar karier
          dalam dunia pemrograman karena Anda tertarik dengan kemampuan untuk
          menciptakan solusi perangkat lunak yang inovatif dan bermanfaat bagi
          orang lain.
        </p>
        <Button className="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired, // Tambahkan validasi untuk properti icon
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Business;
