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
    font-family: "Noto Sans KR";
`;

const MembersContainer = styled.div`
    
`;

const MembersViewContainer = styled.div`
    
`;

export default Members;
