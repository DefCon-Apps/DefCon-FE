import {useEffect, useState} from "react";
import styled from "styled-components";

import * as API from "../../src/Common/API";
import MembersTitle from "./MembersTitle";
import MembersList from "./MembersList";
import MembersDetail from "./MembersDetail";
import MembersRectangle from "./MembersRectangle";

const tmpMemberData: MemberData = {
    id: "",
    data: {
        comment: "",
        company: "",
        company_img: "",
        profileImage: "",
        name: "",
        history: [],
        blog: {isEnabled: false, url: ""},
        boj: {isEnabled: false, url: "", username: ""},
        facebook: {isEnabled: false, url: ""},
        github: {isEnabled: false, url: ""},
        instagram: {isEnabled: false, url: ""},
        twitter: {isEnabled: false, url: ""}
    }
}

const tmpMemberList: Array<MemberData> = [tmpMemberData];

const Members = () => {
    const [isFirstClicked, setIsFirstClicked] = useState(false);
    const [memberData, setMemberData] = useState(tmpMemberData);
    const [memberList, setMemberList] = useState(tmpMemberList);

    useEffect(() => {
        API.getMemberList().then((apiResult : any) => {
            setMemberList(apiResult["data"]);
        });
    }, []);

    const onMemberClick = (id: string) => {
        setIsFirstClicked(true);
        API.getMemberData(id).then((apiResult : any) => {
            setMemberData({id: id, data: apiResult});
        });
    }

    return (
        <MembersStyle>
            <MembersContainer>
                {isFirstClicked && <MembersRectangle/> }
                <MembersTitle />
                <MembersViewContainer>
                    <MembersList memberData={memberList} onClick={onMemberClick}/>
                    <MembersDetail isFirstClicked={isFirstClicked} memberData={memberData}/>
                </MembersViewContainer>
            </MembersContainer>
        </MembersStyle>
    );
};

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
    id: string,
    data: {
        comment: string,
        company: string,
        company_img: string,
        profileImage: string,
        name: string,
        history: Array<{content: string, date: string}>
        blog: {isEnabled: boolean, url: string},
        boj: {isEnabled: boolean, url: string, username: string},
        facebook: {isEnabled: boolean, url: string},
        github: {isEnabled: boolean, url: string},
        instagram: {isEnabled: boolean, url: string},
        twitter: {isEnabled: boolean, url: string}
    }

};

export default Members;
