/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-md text-primary outline-none ${styles}`}>
      Get Started
    </button>
  );
};

export default Button;
