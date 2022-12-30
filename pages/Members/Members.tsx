import styled from "styled-components";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

const Members = () => {
  return (
    <MembersStyle>
        <MembersTitle />
        <MembersList />
        <MembersDetail />
    </MembersStyle>
  );
};

const MembersStyle = styled.div`
  font-family: "Noto Sans KR";
`;

export default Members;
