import styled from "styled-components";
import MembersListItem from "./MembersListItem";

const MembersList = () => {
    const tmpMemberData = {
        comment: "집가고싶다",
        company: "중앙대학교 소프트웨어학부 19학번",
        id: "LR",
        image: "BASE64_STRING",
        name: "유용민",
        sns: [
            {isEnabled: true, url: "https://dev-lr.com"},
            {isEnabled: true, url: "https://solved.ac/profile/yymin1022"},
            {isEnabled: true, url: "https://facebook.com/profile.php?id=100007285635473"},
            {isEnabled: true, url: "https://github.com/yymin1022"},
            {isEnabled: true, url: "https://instagram.com/useful_min"},
            {isEnabled: false, url: ""}
        ]
    }

    return (
        <MembersListContainer>
            <MembersListItem
                data={tmpMemberData} />
        </MembersListContainer>
    );
};

const MembersListContainer = styled.div`
    height: 100%;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export default MembersList;