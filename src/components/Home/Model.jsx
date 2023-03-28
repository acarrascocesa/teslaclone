import styled from "styled-components";

const Model = ({
  title,
  text,
  leftBtn,
  rightBtn,
  bgImg,
  dropDown,
  ifDropDownExist,
}) => {
  return (
    <Background
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <TextItem>
          <h1>{title}</h1>
          <p>{text}</p>
        </TextItem>
        <ButtonItem>
          <ButtonGroup>
            <button type="button" className="left-btn">
              {leftBtn}
            </button>
            {rightBtn && (
              <button type="button" className="right-btn">
                {rightBtn}
              </button>
            )}
          </ButtonGroup>
          {ifDropDownExist && <img src={dropDown} />}
        </ButtonItem>
      </Container>
    </Background>
  );
};

const Background = styled.section`
  min-height: 100vh;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    min-height: 87vh;
  }
  @media screen and (min-width: 280px) and (max-width: 767px) {
    min-height: 75vh;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 94vh;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    min-height: 83vh;
  }
  @media screen and (min-width: 280px) and (max-width: 767px) {
    min-height: 71vh;
  }
`;
const TextItem = styled.div`
  padding-top: 6rem;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding-top: 9rem;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding-top: 8rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding-top: 4rem;
  }

  h1 {
    color: #171a20cc;
    font-weight: 500;
    font-size: 3rem;
    @media screen and (min-width: 550px) and (max-width: 767px) {
      font-size: 2.3rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 1.7rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 1.3rem;
    }
  }
  p {
    font-weight: 300;
    text-decoration: underline;
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
    }
  }
`;
const ButtonItem = styled.div`
  overflow: hidden;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    opacity: 1;
    z-index: 1500;
    margin: 3vh 2rem 0 0;

    animation: animateDown 1.5s infinite;

    @media screen and (max-width: 991px) {
      margin: 1vh 0rem 0 0;
      height: 17px;
      width: 17px;
      object-fit: cover;
    }
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    outline: none;
    border: none;
    text-transform: capitalize;
    padding: 0.8rem 5rem;
    margin: 0 10px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.7s ease-in-out;

    @media screen and (min-width: 425px) and (max-width: 991px) {
      font-size: 11px;
      margin: 9px 0;
      width: 17rem;
    }
    @media screen and (min-width: 280px) and (max-width: 425px) {
      margin: 5px 0;
      width: 14rem;
      padding: 0.55rem 2.5rem;
      font-size: 0.75rem;
    }
  }
`;

export default Model;
