import styled from "styled-components";
import Link from "next/link";

//자간 설정하세요
//font-weight도 잘 생각하세요.

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContents>
        <Link href="/"><FooterLogo src="/Images/subLogo.svg" /></Link>
        <FooterContexts>
          <p>
            <span><Link href="/Privacy">DEF:CON 개인정보보호정책</Link></span><br/>
            (c)2023 DEF:CON ALL RIGHTS RESERVED<br/>
            Designed By HarenKei From Seoul, Korea
          </p>
          <p>
            이 페이지의 모든 소스코드는 <span><a href="https://github.com/DefCon-Apps/DefCon-FE" target="_blank" rel="noreferrer">DEF:CON GitHub</a></span>에서 확인하실 수 있습니다.
          </p>
        </FooterContexts>
      </FooterContents>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100vw;
  border-radius: 1rem 1rem 0 0;
  color: #fff;
  background-color: #001e2e;
  font-family: 'Noto Sans KR';
`;

const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  padding:2rem 10rem 2rem 10rem;
  p{
    letter-spacing: 0.1rem;
    font-weight: lighter;
    font-size: 0.8rem;
  }

  p span{
    font-weight: bold;
  }
`;

const FooterContexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const FooterLogo = styled.img`
  width: 12rem;
  height: 8rem;
`;

export default Footer;
