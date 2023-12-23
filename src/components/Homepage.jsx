import React from "react";
import Slider from "react-slick";
import image from "../assets/images/slider-1.png";
import arrow from "../assets/images/left.png";
import btn from "../assets/images/Right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardellipse from "../assets/images/ellipse2.png";

const Homepage = () => {
  const slider1 = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <div>
        <div className="box z-[1] bg-white relative rounded-[18px] mt-9 sm:ml-[23px] pr-6 pt-[26px]">
          <div className="row flex flex-wrap">
            <div className="md:w-1/2 w-full lg:pt-[79px] md:pt-14">
              <p className="bg-text-gradient bg-clip-text text-center md:text-start text-transparent text-base font-inter font-medium lg:pl-[47px] pl-5 lg:pb-[30px] pb-3">
                Create MetroVerse Genesis
              </p>
              <p className="text-[#7c7c7c] font-inter text-center md:text-start text-xs font-medium  lg:pb-[30px] pb-3 lg:pl-[47px] pl-5">
                physical claim for issue #1 now live. please check that the
                token is available for claim via website
              </p>
              <div className="flex lg:items-start items-center lg:justify-start justify-center">
                <button
                  className="py-2.5 px-[25px] lg:ml-[47px] hover:scale-105 transition-all duration-300 cursor-pointer ml-5 mb-[18px] font-inter text-sm font-medium text-white rounded-[22px] bg-text-gradient shadow-[6px_4px_25px_0px_#E59C3E57]
                "
                >
                  Explorer Now
                </button>
              </div>

              <div className="flex flex-wrap flex-row bg-white rounded-[7px] lg:ml-7 ml-5 border-[2px] border-[#F1AE58]">
                            <div className="sm:w-1/4 w-1/2 ">
                                <div className=" bg-text-gradient lg:pr-[1px] rounded-tl-[7px] rounded-bl-[7px] ">
                                    <div className="bg-white rounded-tl-[7px] rounded-bl-[7px] py-3">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            24.8K
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Items
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2">
                                <div className="bg-text-gradient lg:pr-[1px] rounded-tr-[7px] sm:rounded-none ">
                                    <div className="bg-white py-3 rounded-tr-[7px] sm:rounded-none">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            4,1K
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Owners
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2 ">
                                <div className="bg-text-gradient lg:pr-[1px] rounded-bl-[7px] sm:rounded-none">
                                    <div className="bg-white py-3 rounded-bl-[7px] sm:rounded-none">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            0.221
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Floor Price
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2">
                                <div className="bg-white rounded-tr-[7px] rounded-br-[7px] py-3">
                                    <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                        43.1K
                                    </h4>
                                    <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                        Volume Traded
                                    </p>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="md:w-1/2 w-full lg:pb-0 pb-5 lg:pt-0 pt-5 pl-6">
              <div className="flex justify-end">
                <button onClick={() => slider1?.current?.slickPrev()}>
                  <img src={arrow} alt="arrow" />
                </button>
                <button onClick={() => slider1?.current?.slickNext()}>
                  <img src={btn} alt="btn" className="pl-6" />
                </button>
              </div>
              <Slider
                ref={slider1}
                {...settings}
                className="lg:translate-y-[18%] lg:pt-0 pt-3"
              >
                <img src={image} alt="image" />
                <img src={image} alt="image" />
                <img src={image} alt="image" />
                <img src={image} alt="image" />
              </Slider>
            </div>
          </div>
          <img 
            src={cardellipse}
            alt="cardellipse"
            className="absolute top-[3%] z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
