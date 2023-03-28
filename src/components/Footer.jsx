import styled from "styled-components"

const Footer = () => {
  return (
    <>
    <TeslaFooter>
      <li><p>Tesla Clone by AC &copy; 2023</p></li>
      <li><p>Privacy & Legal</p></li>
      <li><p>Contact</p></li>
      <li><p>Careers</p></li>
      <li><p>Get Newslestter</p></li>
      <li><p>News</p></li>
      <li><p>Forums</p></li>
      <li><p>Locations</p></li>
    </TeslaFooter>
    </>
  )
}

const TeslaFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;

  li {
      list-style: none;

      p {
        padding: 0.3rem 0.7rem;
        margin: 0 0.5rem;
        border: 0.345rem;
        font-size: 1rem;
        font-weight: 500;
        opacity: 1;
        z-index: 1500;
        transition: all 0.7s ease-in-out;
        cursor: pointer;
        font-family: "Hind Madurai", sans-serif;

        @media screen and (max-width: 767px) {
          font-size: 0.8rem;
          padding: 0.3rem 0.5rem;
        }

        &:hover {
          color: #171a20;
          background-color: hsla(0, 0%, 50.2%, 0.125);
        }
      }
    }

`

export default Footer