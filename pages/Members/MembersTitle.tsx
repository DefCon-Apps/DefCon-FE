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
    @media all and (min-width: 1280px) {
        font-size: 55pt;
        letter-spacing: -5px;
    }
    
    /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
    @media all and (min-width:1024px) and (max-width:1279px) {
        font-size: 50pt;
        letter-spacing: -4px;
    }   
    
    /* 테블릿 가로 (해상도 768px ~ 1023px)*/ 
    @media all and (min-width:768px) and (max-width:1023px) {
        font-size: 45pt;
        letter-spacing: -3px;
    } 
    
    /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 40pt;
        letter-spacing: -2px;
    } 
    
    /* 모바일 세로 (해상도 ~ 479px)*/ 
    @media all and (max-width:479px) {
        font-size: 35pt;
        letter-spacing: -1px;
    }
    font-weight: 900;
    line-height: 60px;

    margin: 0 10px -20px 10px;
`;

const MembersTitleSub = styled.p`
    @media all and (min-width: 1280px) {
        font-size: 20pt;
    }
    
    /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
    @media all and (min-width:1024px) and (max-width:1279px) {
        font-size: 18pt;
    }   
    
    /* 테블릿 가로 (해상도 768px ~ 1023px)*/ 
    @media all and (min-width:768px) and (max-width:1023px) {
        font-size: 16pt;
    } 
    
    /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 14pt;
    } 
    
    /* 모바일 세로 (해상도 ~ 479px)*/ 
    @media all and (max-width:479px) {
        font-size: 12pt;
    }
    font-weight: 300;
    line-height: 35px;

    margin: 0 10px 100px 10px;
`;


export default MembersTitle;