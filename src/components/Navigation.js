import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../images/avatar.jpg'

function Navigation() {
  return (
    <NavigationStyled>

        <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
        <ul className="nav-items">
            <li className="nav-items">
                <NavLink to="/home" activeClassName="active-class">
                    <p>GT Muwishi</p>
                    <small>Beneath this mask Mr. Creedy...</small>
                </NavLink>
            </li>
            <li className="nav-items">
                <NavLink to="/about" activeClassName="active-class">About me</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to="/portfolio" activeClassName="active-class">The work of thy hands</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to="/blogs" activeClassName="active-class">See what interests me</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to="/contact" activeClassName="active-class">Say Hi! </NavLink>
            </li>
            <li className="nav-items">
                <NavLink to="/coffee" activeClassName="active-class">Coffee Me</NavLink>
            </li>
        </ul>
        <footer>
            <p>
                @2020 GTM
            </p>
        </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`

    display: flex;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 2rem 0;
    border-right: 1px solid var(--border-color); 

    .avatar{
        width:100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 6px solid var(--border-color);
           
        }
        
    }

    .nav-items{
        width: 100%;
        text-align: left;
        padding: .3rem;
        .active-class{
            background-color:var(--primary-color);
            p{
            small{
                font-size:0.5rem;
            }
        }
        }
       
        li{
            display: block;
            a{
                display: block;
                padding: .4rem 0;
                position: relative;
                z-index:10;
                text-transform: capitalize;
                transition: all .3s ease-in-out;
                font-weight: 600;   
                letter-spacing: .5px;
                
                &:hover{
                    cursor: pointer;
                    background-color: var(--primary-color);
                    transition: All 0.5s ease-in-out ;
                   
                }
                &::before {
                    content: "";
                    bottom:absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height:50%;
                    opacity: 0.21;

                }
            }
            a:hover::before{
                width:100%;
                height:100%;
            }
        }
    }

    footer{
            border-top: 1px solid var(--border-color);
            width: 100%;
            p{
                padding: .5rem 0;
                font-size: 1rem;
                display: block;
                text-align: center;
            }
        }

`

export default Navigation