import demand from "../../../assets/img/about/demand.png";
const Demand = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center content-center">
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Future Forecast on Energy Demands
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl ">
          Forecasting of the energy demands in both energy production and
          consumption. Reports include which time period produces or consumes
          more. This gives the user a better view of which time-period has
          better production or greater consumption for guided decision-making.
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
        {/*--End Demand--*/}
      </div>
      <div>
        <img
          src={demand}
          className="object-scale-down w-[500px] h-[500px]"
          alt="demand"
        />
      </div>
    </div>
  );
};

export default Demand;
