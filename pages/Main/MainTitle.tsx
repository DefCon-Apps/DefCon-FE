import Crab from "../../src/Common/Crab";
import styled from "styled-components";

const MainTitle = () => {
    return(
        <MainContentsStyle>
        <Crab width={15} height={15} />
        <MainContextStyle>
          <h1>TEAM DEF:CON</h1>
          <p>유용민 바보</p>
        </MainContextStyle>
      </MainContentsStyle>
    );
};

const MainContentsStyle = styled.div`
    display: flex;
    
`;

const MainContextStyle = styled.div`
    margin-left: 30rem;
`

export default MainTitle;