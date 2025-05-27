const CoreInformation = ({ text, image }) => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#243447] mx-auto grid grid-cols-3  justify-items-center align-items-center">
      <div className="scale-75 col-span-2 mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        <div className="w-full h-full">
          <div className="rounded m-auto ">{<img src={image} alt="" />}</div>
        </div>
      </div>
      <div className="pb-[20%] pt-[40%] w-full h-full">
        <h1
          className="font-Space-Grotesk font-black text-left xl:text-[50px]"
          alt="">
          {text.name}
        </h1>
        <h4
          className="text-[#FEA803] font-Space-Grotesk font-black text-left xl:text-[30px]"
          alt="">
          {text.title}
        </h4>
        <h5 className="xl:text-[30px]">{text.contact}</h5>
        <h5 className="xl:text-[30px]">{text.email}</h5>
      </div>
    </div>
  );
};

export default CoreInformation;
