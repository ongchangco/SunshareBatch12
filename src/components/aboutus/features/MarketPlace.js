import marketPlace from "../../../assets/img/about/marketplace.png";
const MarketPlace = () => {
  return (
    <div className="lg:grid grid-cols-2 w-full">
      {/*--Marketplace--*/}
      <div>
        <h1 className="font-Space-Grotesk font-black text-left xl:text-[30px]">
          Blockchain Marketplace Feature
        </h1>
        <p className="pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full xl:h-[60] font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl ">
          Showing nearby and newest listings of those who want to sell
          electricity along wit relevant information that support
          decision-making. Transactions are stored securely and verified with
          smart contracts. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Sed adipiscing diam donec adipiscing tristique. Sed felis eget
          velit aliquet. Risus commodo viverra maecenas accumsan lacus vel
          facilisis volutpat est. Non consectetur a erat nam at lectus urna
          duis. Pellentesque id nibh tortor id aliquet lectus proin. Ultricies
          tristique nulla aliquet enim tortor. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor vitae.
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
        <img src={marketPlace} className="w-auto h-auto" alt="marketplace" />
      </div>
      {/*--End Marketplace--*/}
    </div>
  );
};

export default MarketPlace;
