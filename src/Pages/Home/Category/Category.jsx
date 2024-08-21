import Container from "../../../Components/UI/Container/Container";
import partner1 from "../../../assets/img/partner1.png";
import partner2 from "../../../assets/img/partner2.png";
import partner3 from "../../../assets/img/partner3.png";
import partner4 from "../../../assets/img/partner4.png";
import partner5 from "../../../assets/img/partner5.png";
import partner6 from "../../../assets/img/partner6.png";

const Category = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center lg:flex-row gap-8 md:gap-8 lg:gap-8 mb-32">
        <img className="" src={partner1} alt="partner" />
        <img src={partner2} alt="partner" />
        <img src={partner3} alt="partner" />
        <img src={partner4} alt="partner" />
        <img src={partner5} alt="partner" />
        <img src={partner6} alt="partner" />
      </div>
    </Container>
  );
};

export default Category;
