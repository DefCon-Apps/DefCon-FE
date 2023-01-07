import styled from "styled-components";

const MembersTitle = () => {
    return (
        <MembersTitleContainer>
            <MembersTitleMain>MEMBERS<br/>OF DEF:CON</MembersTitleMain>
            <MembersTitleSub><br/>DEF:CON은 성보고등학교 동창 네 명으로 구성된 팀입니다</MembersTitleSub>
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
    font-size: 45pt;
    font-weight: 800;
    line-height: 90px;
`;

const MembersTitleSub = styled.p`
    font-size: 17pt;
    font-weight: 400;
    line-height: 35px;
`;


export default MembersTitle;