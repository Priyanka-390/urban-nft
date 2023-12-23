import { useState } from "react";
import cardimg4 from "../assets/images/cardimg-4.png";
import cardimg5 from "../assets/images/cardimg-5.png";
import cardimg6 from "../assets/images/cardimg-6.png";
import innerimg4 from "../assets/images/inner-img-4.png";
import innerimg5 from "../assets/images/inner-img-5.png";
import innerimg6 from "../assets/images/inner-img-6.png";

const myCard = [
  {
    bgcollection: cardimg4,
    innerimg: innerimg4,
    heading: "Noryoz",
    para: "1.8K",
    id: 1,
  },
  {
    bgcollection: cardimg5,
    innerimg: innerimg5,
    heading: "Bored Ape Solana Club",
    para: "6.0K",
    id: 2,
  },
  {
    bgcollection: cardimg6,
    innerimg: innerimg6,
    heading: "Boryoku Dragonz",
    para: "7.8K",
    id: 3,
  },
  
];
const Fifthcard = () => {
  const [data, setdata] = useState(false);
  function kkk() {
    setdata(!data);
  }

  const myown = myCard.map((myCard) => (
    <div
      className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3 lg:mb-12"
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
      <div className="flex justify-between items-center lg:pt-[45px] pt-7 w-full">
        <p className="text-[#4f4f4f] md:pb-[17px] font-inter text-base font-semibold md:pl-[23px]">
         Trendings NFTs
        </p>
        <button
          onClick={kkk}
          className="text-[#4f4f4f] flex font-inter text-xs font-semibold"
        >
          Marketplace{" "}
          <span className="md:pl-2">
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
      <div className="flex flex-row flex-wrap -mx-3">
        {myown}
      </div>
               {data ? (<div className="flex flex-row flex-wrap -mx-3">{ myown}</div>) : (<div></div>)}
    </div>
  );
};


export default Fifthcard
