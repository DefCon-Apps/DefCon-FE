import PrivacyContents from "./PrivacyContents";
import styled from "styled-components";

const Privacy = () => {
  return (
    <PrivacyNoticeWrapper>
      <PrivacyNoticeTitle>
        <h1>
          개인 정보 처리 방침<br />
          Privacy Notice
        </h1>
        <PrivacyContents/>
      </PrivacyNoticeTitle>
    </PrivacyNoticeWrapper>
  );
};

const PrivacyNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 150px;
  margin-bottom: 50rem;
  font-family: "Noto Sans KR";
  margin-bottom: 145rem;
`;

const PrivacyNoticeTitle = styled.div`
  margin-left: 20vw;
  margin-bottom: 2rem;
  h1 {
    text-align: left;
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: -5px;
  }
`;

export default Privacy;
