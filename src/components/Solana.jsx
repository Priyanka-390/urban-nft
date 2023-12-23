import circle1 from "../assets/images/circle1.png";
import circle2 from "../assets/images/circle2.png";
import circle3 from "../assets/images/circle3.png";
import icon from "../assets/images/icon-img.png"

const imgcard = [
    {
        img: circle1,
        title: "Cet #6882",
        disc: "Cets on Creck",
        no: "250",
    },
    {
        img: circle2,
        title: "Bored Ape #981",
        disc: "Bored Ape Solana Club",
        no: "38",
    },
    {
        img: circle3,
        title: "SolPunk #7803",
        disc: "SolPunks",
        no: "15"
    }
]
const Solana = () => {
    const cardinfo = imgcard.map((imgcard) => (
        <div className="flex justify-between mb-3 px-2 ">
            <div className=" flex items-center">
                <div className="">
                    <img src={imgcard.img} alt="cardimg1" className='rounded-full' />
                </div>
                    <div className="pl-3">
                        <h5 className='font-Inter md:text-[14px] text-[10px]  text-[#474749] leading-[16.24px] font-bold md:pb-[6px] '>{imgcard.title}</h5>
                        <p className='font-inter md:text-[12px] text-[10px]  leading-[13.92px] text-[#474749] '>{imgcard.disc}</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex items-center">
                    <img src={icon} alt="icon" />
                    <p className='text-[12px] text-[#474749] font-Inter leading-[13.92px] '>{imgcard.no}</p>
                </div>
            </div>

        </div>
    ))
    return (
        <div className='bg-white rounded-[18px] pt-5 px-4 pb-7 lg:mt-[68px] mt-7 md:mb-0 mb-4'>
            <div className="flex justify-between mb-8 px-2">
                <h5 className='text-base font-Inter font-medium text-[#4F4F4F]'>History</h5>
                <select className='w-[98px] border border-[#A8A8A8] cursor-pointer border-solid rounded-[4px] text-[12px] font-Inter text-[#4F4F4F] outline-none'>
                    <option >Last Month</option>
                    <option >october</option>
                    <option >september</option>
                    <option >august</option>
                    <option>july</option>
                    <option>june</option>
                    <option>april</option>
                    <option>march</option>
                    <option>february</option>
                    <option>january</option>
                </select>
            </div>
            {cardinfo}
            <button className='bg-text-gradient text-white text-[14px] w-full py-4 rounded-[22px] md:mt-[73px] font-medium'>Show All</button>
        </div>
    )
}
export default Solana
