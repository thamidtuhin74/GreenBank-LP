import Container from "../../../Components/UI/Container/Container";

const Details = () => {
  return (
    <Container>
      <div className="border-nun rounded-[32px] bg-[#3D544D] bg-opacity-[80%] md:my-32 lg:my-32 md:py-16 lg:py-16 md:flex lg:flex justify-around">
        <div className="flex flex-col items-center justify-center max-sm:pb-10">
          <h1 className="text-white font-bold text-5xl leading-[56px] -tracking-[0.32px]">
            16y
          </h1>
          <p className="text-[#2BB32A] font-medium text-[16px] leading-[24px] text-center">
            Experience
          </p>
        </div>
        <div className="details-box flex flex-col items-center justify-center max-sm:pb-10">
          <h1 className="text-white font-extrabold text-[64px]">250+</h1>
          <p className="text-[#2BB32A] font-medium text-[16px] leading-[24px] text-center">
            Merchant Partner
          </p>
        </div>
        <div className="details-box flex flex-col items-center justify-center max-sm:pb-10">
          <h1 className="text-white font-extrabold text-[64px]">10+</h1>
          <p className="text-[#2BB32A] font-medium text-[16px] leading-[24px] text-center">
            Years Experience
          </p>
        </div>
        <div className="details-box flex flex-col items-center justify-center">
          <h1 className="text-white font-extrabold text-[64px]">10.2K+</h1>
          <p className="text-[#2BB32A] font-medium text-[16px] leading-[24px] text-center">
            Worldwide Clients
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Details;
