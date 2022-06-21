import React from "react";
import styled from "styled-components";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import {MainLayout} from '../styles/Layouts'
function PortfolioPage() {
  return (
    <MainLayout>
        <Skills/>
        <Resume />
    </MainLayout>
)
}

export default PortfolioPage;
