/* eslint-disable no-unused-vars */
import React from "react";
import { quotes } from "../assets";
import PropTypes from "prop-types";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10  py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card">
      <img
        src={quotes}
        alt="qoutes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-dimWhite  font-poppins font-normal text-[20px] leading-[32px]">{name}</h4>
          <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px]">{ title}</p>
        </div>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired, // Tambahkan validasi untuk properti icon
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.number.isRequired,
};
export default FeedbackCard;
