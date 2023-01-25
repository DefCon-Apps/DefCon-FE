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
    font-size: 55pt;
    font-weight: 900;
    line-height: 60px;
    letter-spacing: -5px;

    margin-bottom: -20px;
`;

const MembersTitleSub = styled.p`
    font-size: 20pt;
    font-weight: 300;
    line-height: 35px;

    margin-bottom: 100px;
`;


export default MembersTitle;