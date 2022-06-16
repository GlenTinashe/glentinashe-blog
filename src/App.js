import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="main-content">
        <MainContentStyle>
          <div className="lines">
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
            <div className="lines-4"></div>
          </div>
          <HomePage/>
        </MainContentStyle>
      </div>
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem; 
  min-height:100vh;

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display:flex;
    justify-content:space-evenly;

    .lines-1, .lines-2, .lines-3, .lines-4{
      width: .1px;
      min-height:100vh;
      background-color:var(--border-color);
    }
  }
`

export default App;
