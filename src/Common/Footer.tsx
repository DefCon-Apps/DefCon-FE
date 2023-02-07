import styled from "styled-components";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  isDesktop: boolean;
}

const Footer = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <FooterDiv>
      <FooterContents isDesktop={isDesktop}>
        <Link href="/"><FooterLogo src="/Images/subLogo.svg" isDesktop={isDesktop} /></Link>
        <FooterContexts isDesktop={isDesktop}>
          <p>
            <span><Link href="/Privacy">DEF:CON 개인정보보호정책</Link></span><br/>
            (c)2023 DEF:CON ALL RIGHTS RESERVED<br/>
            Designed By HarenKei From Seoul, Korea
          </p>
          <p>
            이 페이지의 모든 소스코드는 <span><Link href="https://github.com/DefCon-Apps/DefCon-FE" target="_blank" rel="noreferrer">DEF:CON GitHub</Link></span>에서 확인하실 수 있습니다.
          </p>
        </FooterContexts>
      </FooterContents>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100vw;
  color: #fff;
  background-color: #001e2e;
  font-family: 'Noto Sans KR';
`;

const FooterContents = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding:${props => props.isDesktop ? "2rem 10rem 2rem 10rem" : "2rem 2rem 2rem 2rem"};
  p{
    letter-spacing: 0.1rem;
    font-weight: lighter;
    font-size: ${props => props.isDesktop ? "10pt" : "8pt"};
    margin-bottom: ${props => props.isDesktop ? "0px" : "20px"};
  }

  p span{
    font-weight: bold;
  }
`;

const FooterContexts = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.isDesktop ? "row" : "column"};
  justify-content: space-between;
  align-items: ${props => props.isDesktop ? "flex-end" : "flex-start"};
`;

const FooterLogo = styled.img<Props>`
  width: ${props => props.isDesktop ? "240px" : "120px"};
  height: ${props => props.isDesktop ? "160px" : "80px"};
`;

export default Footer;
