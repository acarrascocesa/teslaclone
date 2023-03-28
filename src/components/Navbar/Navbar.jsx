import styled from "styled-components";
import logo from "../../assets/Teslalogo.svg";
import { NavLinkApi } from "./api";
import closeIcon from "../../assets/close.svg";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <TeslaNav>
        <NavBrand>
          <img src={logo} alt="logo" />
        </NavBrand>
        <ul className="display-none">
          <li>
            <p>Model S</p>
          </li>
          <li>
            <p>Model 3</p>
          </li>
          <li>
            <p>Model X</p>
          </li>
          <li>
            <p>Model Y</p>
          </li>
          <li>
            <p>Solar Roof</p>
          </li>
          <li>
            <p>Solar Panels</p>
          </li>
        </ul>
        <ul>
          <li className="display-none">
            <p>Shop</p>
          </li>
          <li className="display-none">
            <p>Account</p>
          </li>
          <li>
            <p onClick={()=>setIsOpen(true)} className="btn-active">Menu</p>
          </li>
        </ul>
      </TeslaNav>

      <MobileNav show={isOpen}>
        <div className="close-icon">
          <img onClick={()=>setIsOpen(false)} src={closeIcon} alt="close" />
        </div>
        {NavLinkApi &&
          NavLinkApi.map((item, index) => (
            <li key={index}>
              <p>{item.links}</p>
            </li>
          ))}
      </MobileNav>
    </>
  );
};

const TeslaNav = styled.nav`
  display: flex;
  min-height: 5vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 991px) {
    min-height: 9vh;
    padding: 0 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;

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
  }
`;
const NavBrand = styled.div`
  img {
    width: 87px;
    height: auto;
    object-fit: contain;
    opacity: 1;
    cursor: pointer;
  }
`;
const MobileNav = styled.div`
  .close-icon {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1rem;
    width: 100%;

    img {
      width: 17px;
      height: auto;
      object-fit: contain;
      opacity: 1;
      z-index: 2000;
      cursor: pointer;
    }
  }

  li {
    list-style: none;

    p {
      padding: 0.5rem 0.7rem;
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

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 15rem;

  display: ${props => props.show ? 'flex' : 'none'};
  min-height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  background: #fff;
  opacity: 1;
  z-index: 2000;
  overflow-y: scroll;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Navbar;
