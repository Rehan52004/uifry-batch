import React from "react";

function FaqsCard(props) {
  const { title, description, bgColor, textColor } = props;
  return (
    <>
      <div className={`${bgColor} ${textColor} p-3 rounded-md`}>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='text-sm'>{description}</p>
      </div>
    </>
  );
}

export default FaqsCard;
