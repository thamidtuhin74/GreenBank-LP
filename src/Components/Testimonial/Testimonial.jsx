import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import user3 from "../../assets/img/user3.png";
import quatation from "../../assets/img/quatation-icon.svg";
import Container from "../UI/Container/Container";
const Testimonial = () => {
  return (
    <Container>
      <div className="md:flex gap-8 md:pt-[128px] pb-10">
        <div className="bg-[#27322f3d] rounded-[32px] py-12 px-6">
          <p className="w-[56px] h-[56px] rounded-full bg-[#3D544D] text-center p-4">
            <img src={quatation} alt="" />
          </p>
          <p className="text-white font-normal text-[16px] leading-[24px] pt-8">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex items-center gap-2 pt-8">
            <img src={user1} alt="" />
            <div>
              <h1 className="text-white font-medium text-[16px] leading-[24px] tracking-[-0.32px]">
                Hadid Khan
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[12px] leading-[20px]">
                UIUX Designer
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#27322f3d] rounded-[32px] py-12 px-6">
          <p className="w-[56px] h-[56px] rounded-full bg-[#3D544D] text-center p-4">
            <img src={quatation} alt="" />
          </p>
          <p className="text-white font-normal text-[16px] leading-[24px] pt-8">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex items-center gap-2 pt-8">
            <img src={user2} alt="" />
            <div>
              <h1 className="text-white font-medium text-[16px] leading-[24px] tracking-[-0.32px]">
                Hadid Khan
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[12px] leading-[20px]">
                UIUX Designer
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#27322f3d] rounded-[32px] py-12 px-6">
          <p className="w-[56px] h-[56px] rounded-full bg-[#3D544D] text-center p-4">
            <img src={quatation} alt="" />
          </p>
          <p className="text-white font-normal text-[16px] leading-[24px] pt-8">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex items-center gap-2 pt-8">
            <img src={user3} alt="" />
            <div>
              <h1 className="text-white font-medium text-[16px] leading-[24px] tracking-[-0.32px]">
                Hadid Khan
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[12px] leading-[20px]">
                UIUX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
