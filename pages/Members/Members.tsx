import styled from "styled-components";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

const Members = () => {
  return (
    <MembersStyle>
        <MembersContainer>
            <MembersTitle />
            <MembersViewContainer>
                <MembersList />
                <MembersDetail />
            </MembersViewContainer>
        </MembersContainer>
    </MembersStyle>
  );
};

const MembersStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    font-family: "Noto Sans KR";
`;

const MembersContainer = styled.div`
    height: 100%;
    width: 1400px;
  
    margin-top: 150px;
`;

const MembersViewContainer = styled.div`
    height: 100%;
    width: 100%;
  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export default Members;
