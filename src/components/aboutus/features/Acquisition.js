import acquisition from "../../../assets/img/about/analysis.png";

const Acquisition = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div>
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Daily Forecast on Energy Acquisition
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl ">
          Prediciting how much energy can be acquired throughout the day. This
          helps manage the electricity consumed daily through reports that
          include the total energy consumed by every household device
          --providing an efficient method for monitoring and budgeting the
          resource wisely.
          <br></br>
          <br></br>
          Facilisis magna etiam tempor orci eu lobortis elementum. Sagittis orci
          a scelerisque purus semper eget duis. Ligula ullamcorper malesuada
          proin libero nunc. Facilisis volutpat est velit egestas dui id ornare
          arcu. Vitae sapien pellentesque habitant morbi tristique senectus et
          netus et. Eu augue ut lectus arcu bibendum at varius. Ut morbi
          tincidunt augue interdum velit euismod in pellentesque. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus. Vel pretium
          lectus quam id leo in vitae turpis massa. Faucibus ornare suspendisse
          sed nisi lacus sed viverra tellus. Nunc sed id semper risus in.
        </p>
      </div>

      <div className="">
        <img
          src={acquisition}
          className="object-scale-down w-[350px] h-[350px]"
          alt="acquisition"
        />
      </div>
    </div>
  );
};
export default Acquisition;
