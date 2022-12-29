import styled from "styled-components";

const MainHistory = () => {
    return(
        <MainHistoryStyle>
          <HistoryTitle>
            <h1>시작은 성보고 꼭대기<br/>컴퓨터실에서부터</h1>
          </HistoryTitle>
          
          <HistoryContents>
            <HistoryImage>
            </HistoryImage>
              <HistoryContext>
                <p>
                  DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로<br/>
                  소프트웨어를 좋아하는 학생들이 모여 재미있는 일을 하던<br/>
                  데에서 시작되었습니다. 학교 행사에도 적극적으로 참여해<br/>
                  우리가 좋아하는 것들을 다른 학생들과 나눴죠.<br/>
                </p>
                <HistoryButton>
                  <button>응애</button> <button>응애1</button>
                </HistoryButton>
              </HistoryContext>
          </HistoryContents>
        </MainHistoryStyle>
    )
};

const MainHistoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

const HistoryTitle = styled.div`

  
`

const HistoryImage = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: grey;
  
`;

const HistoryContext = styled.div`
  display: flex;
  flex-direction: column;
`

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
`

const HistoryContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  p{
    text-align: left;
  }
`;
export default MainHistory;