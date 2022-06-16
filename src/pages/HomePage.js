import React from "react";
import styled from "styled-components";
import Particle from "../components/Particles";
import FaceBookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particles-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm<span> GlenTinashe </span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ea
          debitis voluptates, accusantium magnam tenetur nisi sapiente aperiam
          at soluta.
        </p>
        <div className="icons">
          <a href="http://localhost:3000/" className="icon i-facebook">
            <FaceBookIcon />
          </a>
          <a href="http://localhost:3000/" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="http://localhost:3000/" className="icon i-twitter">
            <TwitterIcon />
          </a>
          <a href="http://localhost:3000/" className="icon i-gmail">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: inline-block;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
        
      }
      .i-gmail {
          &:hover {
            border: 2px solid red;
            color: red;
          }
        }
        .i-facebook {
          &:hover {
            border: 2px solid skyblue;
            color: skyblue;
          }
        }
        .i-github {
          &:hover {
            border: 2px solid #5F4687;
            color: #5F4687;
          }
        }
    }
  }
`;

export default HomePage;
