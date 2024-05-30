import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col ">
        <h2 className={styles.heading2}>Lets try our service now !!</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          ello, I&#39;m ChatGPT, a versatile AI language model created by
          OpenAI. My primary purpose is to assist with answering questions,
          providing information, generating text
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button></Button>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
