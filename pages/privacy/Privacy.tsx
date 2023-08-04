import PrivacyContents from "./PrivacyContents";
import styled from "styled-components";

const Privacy = () => {
  return (
    <PrivacyNoticeWrapper>
      <PrivacyContents/>
    </PrivacyNoticeWrapper>
  );
};

const PrivacyNoticeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  margin-bottom: 5em;
`;



export default Privacy;
