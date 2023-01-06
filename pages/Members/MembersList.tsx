import styled from "styled-components";
import MembersListItem from "./MembersListItem";

const MembersList = (props: {onClick: (id: string) => void}) => {
    const tmpMemberData = {
        comment: "집가고싶다",
        company: "중앙대학교 소프트웨어학부 19학번",
        id: "LR",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
        name: "유용민",
        blog: {isEnabled: true, url: "https://dev-lr.com"},
        boj: {isEnabled: true, url: "https://solved.ac/profile/yymin1022"},
        facebook: {isEnabled: true, url: "https://facebook.com/profile.php?id=100007285635473"},
        github: {isEnabled: true, url: "https://github.com/yymin1022"},
        instagram: {isEnabled: true, url: "https://instagram.com/useful_min"},
        twitter: {isEnabled: false, url: ""}
    }

    return (
        <MembersListContainer>
            <MembersListItem data={tmpMemberData} onClick={props.onClick}/>
            <MembersListItem data={tmpMemberData} onClick={props.onClick}/>
            <MembersListItem data={tmpMemberData} onClick={props.onClick}/>
            <MembersListItem data={tmpMemberData} onClick={props.onClick}/>
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
  
    margin-bottom: 100px;
`;

export default MembersList;