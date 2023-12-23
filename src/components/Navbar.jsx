import cody from "../assets/images/cody.png"

const Navbar = () => {
  return (
    <div>
           <nav className='flex justify-between sm:ml-7 px-2 md:mr-14 pt-6'>
        <div className="flex bg-white items-center py-2 px-4 gap-2 rounded-[18px] lg:max-w-[280px] sm:max-w-[150px] max-w-[100px]  w-full">
          <svg className=" hidden lg:block" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 15L10.5 11M6.5 13C3.18629 13 0.5 10.3137 0.5 7C0.5 3.68629 3.18629 1 6.5 1C9.81371 1 12.5 3.68629 12.5 7C12.5 10.3137 9.81371 13 6.5 13Z" stroke="#1D1929" />
          </svg>
          <input type="text" placeholder='Search...' className='outline-none py-3 px-2 font-Libre text-[14px] text-[#A5A3A9] leading-[16.24px] w-full' />
          <svg className=" hidden lg:block" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4L6.5 4M6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4M6.5 4C6.5 5.10457 5.60457 6 4.5 6C3.39543 6 2.5 5.10457 2.5 4M2.5 4L0 4M15 12L12.5 12M12.5 12C12.5 10.8954 11.6046 10 10.5 10C9.39543 10 8.5 10.8954 8.5 12M12.5 12C12.5 13.1046 11.6046 14 10.5 14C9.39543 14 8.5 13.1046 8.5 12M8.5 12L1.27146e-07 12" stroke="#1D1929" />
          </svg>
        </div>
        <div className="flex  items-center">
          <div className='flex gap-6'>
            <svg className="cursor-pointer ml-3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7715 14.7711C12.6887 16.8539 9.31184 16.8539 7.22905 14.7711M14.7715 14.7711C16.8543 12.6883 16.8543 9.3114 14.7715 7.2286M14.7715 14.7711L17.6 17.5995M7.22905 14.7711C5.14625 12.6883 5.14625 9.3114 7.22905 7.2286M7.22905 14.7711L4.40066 17.5995M14.7715 7.2286C12.6887 5.1458 9.31184 5.1458 7.22905 7.2286M14.7715 7.2286L17.6 4.40017M7.22905 7.2286L4.40066 4.40017M17.6 17.5995C13.9551 21.2444 8.04556 21.2444 4.40066 17.5995M17.6 17.5995C21.2449 13.9546 21.2449 8.04507 17.6 4.40017M4.40066 17.5995C0.755769 13.9546 0.755769 8.04507 4.40066 4.40017M17.6 4.40017C13.9551 0.755281 8.04556 0.75528 4.40066 4.40017" stroke="url(#paint0_linear_33_540)" stroke-width="1.5" />
              <defs>
                <linearGradient id="paint0_linear_33_540" x1="0.314336" y1="-3.12297" x2="15.6051" y2="25.6755" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="cursor-pointer"  width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33301 14.9998H18.6663M3.33301 14.9998V8.33317C3.33301 4.65127 6.31778 1.6665 9.99967 1.6665C13.6816 1.6665 16.6663 4.65127 16.6663 8.33317V14.9998M7.33301 16.9998V17.6665C7.33301 19.1393 8.52691 20.3332 9.99967 20.3332C11.4724 20.3332 12.6663 19.1393 12.6663 17.6665V16.9998" stroke="url(#paint0_linear_33_541)" stroke-width="1.5" />
              <defs>
                <linearGradient id="paint0_linear_33_541" x1="0.0769697" y1="-3.12297" x2="15.985" y2="24.698" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFC881" />
                  <stop offset="1" stop-color="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex sm:gap-3 pl-7 md:pl-14 items-center">
            <img src={cody} alt="avtar" className='w-full' />
            <div>
              <p className='font-Libre font-bold text-[14px] text-[#474749] leading-[16.24px] hidden lg:block '>Cody Fisher</p>
              <p className='text-[12px] font-semibold font-Libre leading-[15.6px] text-[#77757F]  hidden lg:block'>kenzi.lawson@example.com</p>
            </div>
          </div>
        </div>
      </nav >
    </div>
  )
}

export default Navbar
