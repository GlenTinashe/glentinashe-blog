import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <MainContentStyle>
          <div className="lines">
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
            <div className="lines-4"></div>
          </div>
          <Routes>
            <Route exact path= "/" element={<HomePage/>} />
            <Route exact path= "/resume" element={<ResumePage/>} />
            <Route exact path= "/portfolio" element={<PortfolioPage/>} />
            <Route exact path= "/blogs" element={<BlogsPage/>} />
            <Route exact path= "/about" element={<AboutPage/>} />
            <Route exact path= "/contact" element={<ContactPage/>} />
          </Routes>
        </MainContentStyle>
      </div>
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .lines-1,
    .lines-2,
    .lines-3,
    .lines-4 {
      width: 0.1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
