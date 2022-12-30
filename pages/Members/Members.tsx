import Link from "next/link";
import styled from "styled-components";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";

const Members = () => {
  return (
    <MemberStyle>
        <MembersTitle />
        <MembersList />
    </MemberStyle>
  );
};

const MemberStyle = styled.div`
  font-family: "Noto Sans KR";
`;

export default Members;
