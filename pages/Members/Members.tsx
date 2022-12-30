import styled from "styled-components";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

const Members = () => {
  return (
    <MemberStyle>
        <MembersTitle />
        <MembersList />
        <MembersDetail />
    </MemberStyle>
  );
};

const MemberStyle = styled.div`
  font-family: "Noto Sans KR";
`;

export default Members;
