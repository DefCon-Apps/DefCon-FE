import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDiv>
        <FooterContents>
          <Link href="/">
            <FooterLogo src="/Images/subLogo.svg" />
          </Link>
          <FooterContexts>
            <p>
              <span>
                <Link href="/Privacy">DEF:CON 개인정보보호정책</Link>
              </span>
              <br />
              (c)2023 DEF:CON ALL RIGHTS RESERVED
              <br />
              Designed By HarenKei From Seoul, Korea
            </p>
            <p>
              이 페이지의 모든 소스코드는{" "}
              <span>
                <Link
                  href="https://github.com/DefCon-Apps/DefCon-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  DEF:CON GitHub
                </Link>
              </span>
              에서 확인하실 수 있습니다.
            </p>
          </FooterContexts>
        </FooterContents>
      </FooterDiv>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  @media all and (min-width: 1280px) {
    width: 1400px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 360px;
  }
`;

const FooterDiv = styled.div`
  width: 100vw;
  color: #fff;
  background-color: #001e2e;
  font-family: "Noto Sans KR";
`;

const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 1024px) {
    padding: 2rem 10rem 2rem 10rem;
  }
  padding: 2rem 2rem 2rem 2rem;

  p {
    @media all and (min-width: 1024px) {
      font-size: 10pt;
      margin-bottom: 0px;
    }

    letter-spacing: 0.1rem;
    font-weight: lighter;
    font-size: 8pt;
    margin-bottom: 20px;
  }

  p span {
    font-weight: bold;
  }
`;

const FooterContexts = styled.div`
  display: flex;

  @media all and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
  }

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterLogo = styled.img`
  @media all and (min-width: 1024px) {
    width: 240px;
    height: 160px;
  }

  width: 120px;
  height: 80px;
`;

export default Footer;
