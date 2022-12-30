import Link from "next/link";
import styled from "styled-components";
import MembersTitle from "./MembersTitle";

const Members = () => {
  return (
    <MemberStyle>
        <MembersTitle />
    </MemberStyle>
  );
};

const MemberStyle = styled.div`
  font-family: "Noto Sans KR";
`;

export default Members;
