import Link from "next/link";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderDiv>
      <HeaderNavUl>
        <li><Link href="/Designs">Designs </Link></li>
        <li><Link href="/Projects">Projects</Link></li>
        <li><Link href="/Members">Members</Link></li>
      </HeaderNavUl>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  width: 100%;
  height: 5rem;
  font-size: 20px;
  background-color: red;
`

const HeaderNavUl = styled.ul`
  display: flex;
  justify-content: center;
`

export default Header;
