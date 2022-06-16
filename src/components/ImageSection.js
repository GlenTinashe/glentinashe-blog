import React from 'react'
import styled from 'styled-components'
import bed from '../images/bed.jpg'
import PrimaryButton from '../components/PrimaryButton'

function ImageSection() {
  return (
    <ImageSectionStyled>
        <div className="left-content">
            <img src={bed} alt="image of me" />
        </div>
        <div className="right-content">
         
                <h4>
                    I am Glen Too <span>Yes I am</span>
                </h4>
         
            <p className="paragraph">
                Blanditiis, voluptatem rerum? Quo cum quam autem delectus, facere ipsum inventore repellendus cupiditate accusamus, unde aliquid, commodi fugit architecto quidem expedita illum rem. Omnis, placeat?
            </p>
            <div className="about-info">
                <div className="info-title">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Natioanlity</p>
                    <p>Location</p>
                    <p>LAnuage</p>
                    <p>Service</p>
                </div>
                <div className="info">
                    <p>: Lorem Ipsum</p>
                    <p>: 23</p>
                    <p>: Zimbo</p>
                    <p>: Harare</p>
                    <p>: Java lol</p>
                    <p>: A lot of stuff</p>
                </div>
            </div>
            <PrimaryButton title={'Download CV'}/>
        </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;