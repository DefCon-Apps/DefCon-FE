import {useEffect, useState} from "react";
import styled from "styled-components";

import * as API from "../../src/Common/API";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";

const tmpMemberData: MemberData = {
    comment: "한줄소개",
    company: "소속",
    id: "닉네임",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
    name: "이름",
    history: [],
    blog: {isEnabled: false, url: ""},
    boj: {isEnabled: false, url: "", username: ""},
    facebook: {isEnabled: false, url: ""},
    github: {isEnabled: false, url: ""},
    instagram: {isEnabled: false, url: ""},
    twitter: {isEnabled: false, url: ""}
}

const tmpMemberList: Array<MemberData> = [];
tmpMemberList.push(tmpMemberData);

const Members = () => {
    const [memberData, setMemberData] = useState(tmpMemberData);
    const [memberList, setMemberList] = useState(tmpMemberList);

    useEffect(() => {
        API.getMemberList().then((apiResult : any) => {
            setMemberList(apiResult["data"]);
        });
    }, []);

    return (
        <MembersStyle>
            <MembersContainer>
                <MembersTitle />
                <MembersViewContainer>
                    <MembersList memberData={memberList} onClick={onMemberClick}/>
                    <MembersDetail memberData={memberData}/>
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

export type MemberData = {
    comment: string,
    company: string,
    id: string,
    image: string,
    name: string,
    history: Array<{content: string, date: string}>
    blog: {isEnabled: boolean, url: string},
    boj: {isEnabled: boolean, url: string, username: string},
    facebook: {isEnabled: boolean, url: string},
    github: {isEnabled: boolean, url: string},
    instagram: {isEnabled: boolean, url: string},
    twitter: {isEnabled: boolean, url: string}
};

export default Members;
