import styled from "styled-components";

const MembersTitle = () => {
    return (
        <MembersTitleContainer>
            <MembersTitleMain>MEMBERS TITLE MAIN</MembersTitleMain>
            <MembersTitleSub>MEMBERS TITLE SUB</MembersTitleSub>
        </MembersTitleContainer>
    );
};

const MembersTitleContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MembersTitleMain = styled.p`

`;

const MembersTitleSub = styled.p`

`;


export default MembersTitle;