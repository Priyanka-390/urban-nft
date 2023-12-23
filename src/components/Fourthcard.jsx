import React from "react";
import img1 from "../assets/images/img-1.png";
import icon from "../assets/images/icon-img.png";
import img2 from "../assets/images/img-2.png";
import img3 from "../assets/images/img-3.png";

const myFourthcard = [
  { 
    img:img1
  },
  {
    img:img2
  },
  {
    img:img3
  }
]

const Fourthcard = () => {
  const data = myFourthcard.map((myFourthcard) => (
 <div className="card p-[9px] rounded-[18px] mb-3 bg-white">
              <div className="flex justify-between items-end">
               <div className="flex ">
        <img src={myFourthcard.img} alt="img-1" />
       <div className="pl-[11px] flex-col">
                  <p className="font-inter text-[#7c7c7c] text-[7px] font-medium ">Metroverse Genesis</p>
                  <p className="text-[#474749] text-sm font-bold pt-2 ">Block #1460</p>
                      <p className="font-inter text-[#7c7c7c] text-[7px] font-medium pt-2">Owned by  <span className="bg-text-gradient bg-clip-text text-transparent">BabyKee</span></p>
                      <span className="flex items-center cursor-pointer pt-4"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.9149 6.73221C1.19957 4.49888 2.03557 1.94621 4.38024 1.19088C5.61357 0.792881 6.9749 1.02755 8.00024 1.79888C8.97024 1.04888 10.3816 0.795548 11.6136 1.19088C13.9582 1.94621 14.7996 4.49888 14.0849 6.73221C12.9716 10.2722 8.00024 12.9989 8.00024 12.9989C8.00024 12.9989 3.06557 10.3135 1.9149 6.73221Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.667 3.4668C11.3803 3.69746 11.8843 4.33413 11.945 5.08146" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className="pl-1.5 text-[#130f29] font-inter text-sm">1K</span>
</span>
                  </div>
                  </div>
                  <div className="flex">
                      <img src={icon} alt="icon" />
                      <p className="pl-1.5 text-[#130f29] font-inter text-sm">24</p>
                  </div>
              </div>
              </div>
  ))
  return (
    <div>
      <p className="text-[#4f4f4f] font-inter text-base font-semibold pb-4 pt-8">New NFTs</p>
         {data}
    </div>
  );
};

export default Fourthcard;
