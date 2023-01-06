import styled from "styled-components";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

export type MemberData = {
    comment: string,
    company: string,
    id: string,
    image: string,
    name: string,
    blog: {isEnabled: boolean, url: string},
    boj: {isEnabled: boolean, url: string},
    facebook: {isEnabled: boolean, url: string},
    github: {isEnabled: boolean, url: string},
    instagram: {isEnabled: boolean, url: string},
    twitter: {isEnabled: boolean, url: string}
};

const tmpMemberData: MemberData = {
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

const tmpMemberList: Array<MemberData> = [];
tmpMemberList.push(tmpMemberData);
tmpMemberList.push(tmpMemberData);
tmpMemberList.push(tmpMemberData);
tmpMemberList.push(tmpMemberData);

const Members = () => {
    return (
        <MembersStyle>
            <MembersContainer>
                <MembersTitle />
                <MembersViewContainer>
                    <MembersList memberData={tmpMemberList} onClick={onMemberClick}/>
                    <MembersDetail />
                </MembersViewContainer>
            </MembersContainer>
        </MembersStyle>
    );
};

const onMemberClick = (id: string) => {
    console.log(`${id} Clicked!`);
}

const MembersStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    font-family: "Noto Sans KR";
`;

const MembersContainer = styled.div`
    height: 100%;
    width: 1400px;
  
    margin-top: 150px;
`;

const MembersViewContainer = styled.div`
    height: 100%;
    width: 100%;
  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export default Members;
