import styled from "styled-components";

const Footer = () => {
    return (
      <FooterDiv>
        <h1>Footer</h1>
      </FooterDiv>
    );
  };

const FooterDiv = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 1rem 1rem 0 0;
  position: fixed;
  margin-top: 30rem;
  color : #fff;
  background-color: #001E2E;
`
  
export default Footer;
  