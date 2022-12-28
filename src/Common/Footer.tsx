import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
    return (
      <FooterDiv>
        <h1>Footer</h1>
        <p><Link href="/Privacy">Privacy Notice Page</Link></p>
      </FooterDiv>
    );
  };

const FooterDiv = styled.div`
  width: 100vw;
  height: 20rem;
  border-radius: 1rem 1rem 0 0;
  color : #fff;
  background-color: #001E2E;
`
  
export default Footer;
  