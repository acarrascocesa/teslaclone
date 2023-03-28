import styled from "styled-components";
import Model from "./Home/Model";
import bgImg from "../assets/tesla-car-1.jpg";
import bgImg2 from "../assets/tesla-car-2.jpg";
import bgImg3 from "../assets/tesla-car-3.jpg";
import bgImg4 from "../assets/tesla-car-4.jpg";
import bgImg5 from "../assets/solar-panels.jpg";
import bgImg6 from "../assets/solar-roof.jpg";
import bgImg7 from "../assets/Desktop-Accessories.jpg";
import dropDown from "../assets/down-arrow.svg";

const Home = () => {
  return (
    <>
      <Main>
        <Model
          title="Model 3"
          text="Leasing starting at $349/mo"
          leftBtn="Custom Order"
          rightBtn="View Inventory"
          bgImg={bgImg3}
          dropDown={dropDown}
          ifDropDownExist
        />

        <Model
          title="Model Y"
          text="Schedule a Demo Drive"
          leftBtn="Custom Order"
          rightBtn="View Inventory"
          bgImg={bgImg2}
        />

        <Model
          title="Model S"
          text="Schedule a Demo Drive"
          leftBtn="Custom Order"
          rightBtn="View Inventory"
          bgImg={bgImg}
        />
        <Model
          title="Model X"
          text="Schedule a Demo Drive"
          leftBtn="Custom Order"
          rightBtn="View Inventory"
          bgImg={bgImg4}
        />

        <Model
          title="Solar Panels"
          text="Lowest Cost Solar Panels in America"
          leftBtn="Order Now"
          rightBtn="Learn More"
          bgImg={bgImg5}
        />

        <Model
          title="Solar Roof"
          text="Produce Clean Energy From Your Roof"
          leftBtn="Order Now"
          rightBtn="Learn More"
          bgImg={bgImg6}
        />

        <Model
          title="Accesories"
          bgImg={bgImg7}
          leftBtn="Shop Now"
        />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-align: initial;
  scroll-snap-type: mandatory;
`;

export default Home;
