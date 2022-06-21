import React from "react";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import ContactItemStyled from '../components/ContactItem'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
  const phone = <PhoneIcon/>
  const email = <EmailIcon/>
  const location = <LocationOnIcon/>
  return (
    <MainLayout>
      <Title title={"Contact Me"} span={"Contact Me"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>

          <div className="left-content">
          <div className="contact-title">
            <h4>Get in touch</h4>
          </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">Enter your Name*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email" id="email">Enter your Email*</label>
                <input type="text" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject" id="subject">Enter your subject*</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message</label>
                <textarea name="text-area" id="text-area" cols="30" rows="10"></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title={'Send Email'}>

                </PrimaryButton>
              </div>
            </form>
          </div>
          <div className="right-content">
          <ContactItemStyled title={'Phone'}  icon={phone} contact1={'4565'} contact2={'5214'}></ContactItemStyled>
          <ContactItemStyled  title={'EMail'} icon={email} contact1={'glentinashe@gmail.com'} contact2={'5214'}></ContactItemStyled>
          <ContactItemStyled  title={'Find me at'} icon={location} contact1={'4565'} contact2={'5214'}></ContactItemStyled>
          </div>
        </InnerLayout>
      </ContactPageStyled>
     
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`

  .contact-section{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    .left-content{
      .contact-title{
        h4{
          color:var(--white-white);
          font-size: 1.8rem;
          padding: 1rem 0;
        }
      }
      .form{
      .form-field{
        margin-top: 2rem;
        position: relative;
        label{
          position:absolute;
          left:20px;
          top:-19px;
          display:inline-block;
          background-color: var(--background-dark-color);
          padding:0rem .5rem;
          color:inherit;
        };
        input{
          border: 1px solid var(--border-color);
          outline:none;
          background:transparent;
          height:45px;
          padding:0 15px;
          width:100%;
          color:inherit;
        }
        textarea{
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline:none;
          color: inherit;
          width:100%;
          padding: .8rem 1rem;
        }
      }
    }
    }
  }  

`;

export default ContactPage;
