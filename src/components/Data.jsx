import { useState } from "react";
import cardimg1 from "../assets/images/cardimg-1.png";
import cardimg2 from "../assets/images/cardimg-2.png";
import cardimg3 from "../assets/images/cardimg-3.png";
import innerimg1 from "../assets/images/inner-img-1.png";
import innerimg2 from "../assets/images/inner-img-2.png";
import innerimg3 from "../assets/images/inner-img-3.png";

const myCard = [
  {
    bgcollection: cardimg1,
    innerimg: innerimg1,
    heading: "Jozo Gators",
    para: "1.1K",
    id: 1,
  },
  {
    bgcollection: cardimg2,
    innerimg: innerimg2,
    heading: "PXN: Ghost Division",
    para: "10K",
    id: 2,
  },
  {
    bgcollection: cardimg3,
    innerimg: innerimg3,
    heading: "Ragnarok Meta",
    para: "7.8K",
    id: 3,
  },
];
const Data = () => {
  const [data, setdata] = useState(false);
  function kkk() {
    setdata(!data);
  }

  const myown = myCard.map((myCard) => (
    <div
      className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3"
      key={myCard.id}
    >
      <div
        style={{ backgroundImage: `url(${myCard.bgcollection})` }}
        className={`shadow-carditems w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover object-cover`}
      >
        <img
          src={myCard.innerimg}
          alt="dragon"
          className=" border-[2px] rounded-md"
        />
        <p className="text-white text-center font-Inter text-base font-semibold">
          {myCard.heading}
        </p>
        <p className="text-[11px] font-Inter font-normal text-center text-white">
          {myCard.para}
        </p>
        <div className="w-full h-[69px] absolute bottom-0 left-0 -z-[1]  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70"></div>
      </div>
    </div>
  ));
  return (
    <div className=" md:pl-5">
      <div className="flex justify-between lg:pt-[66px] md:pt-14 pt-7 items-center w-full">
        <p className="text-[#4f4f4f] md:pb-[17px] font-inter text-base font-semibold md:pl-[23px]">
          Top Collections
        </p>
        <button
          onClick={kkk}
          className="text-[#4f4f4f] flex font-inter text-xs font-semibold"
        >
          View All{" "}
          <span className="pl-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.167 7.81706L3.16699 7.81706"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex flex-row flex-wrap -mx-3">{myown}</div>
      {data ? (
        <div className="flex flex-row flex-wrap -mx-3">{myown}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Data;
