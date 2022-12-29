import styled from "styled-components";
import Dbutton from "../../src/Common/Dbutton";

const MainHistory = () => {
    return(
        <MainHistoryStyle>
          <HistoryTitle>
            <h1>시작은 성보고 꼭대기<br/>컴퓨터실에서부터</h1>
            <HistoryImage>
            </HistoryImage>
          </HistoryTitle>
          <HistoryContents>  
              <HistoryContext>
                <p>
                  DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로<br/>
                  소프트웨어를 좋아하는 학생들이 모여 재미있는 일을 하던<br/>
                  데에서 시작되었습니다. 학교 행사에도 적극적으로 참여해<br/>
                  우리가 좋아하는 것들을 다른 학생들과 나눴죠.<br/>
                </p>
                <HistoryButton>
                  <Dbutton
                    text={"성보고 App"}
                    textColor={"#FFFFFF"}
                    textSize={20}
                    width={12}
                    height={3}
                    btnColor={"#001E2E"}
                  />
                  <Dbutton
                    text={"성보고 알아보기"}
                    textColor={"#FFFFFF"}
                    textSize={20}
                    width={12}
                    height={3}
                    btnColor={"#001E2E"}
                  />
                </HistoryButton>
              </HistoryContext>
          </HistoryContents>
        </MainHistoryStyle>
    )
};

const MainHistoryStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Noto Sans KR';
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    text-align:left;
    font-size: 3em;
  }
`

const HistoryImage = styled.div`
  width: 36rem;
  height: 24rem;
  margin-top: 2rem;
  border-radius: 1.5rem;
  background-color: grey;
  
`;



const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const HistoryContents = styled.div`
  margin-top: 7rem;
  margin-left: 8rem;
  
  p{
    text-align: right;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const HistoryContext = styled.div`
  


`
export default MainHistory;