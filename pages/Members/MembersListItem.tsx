import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { MemberData } from "./Members";

const MembersListItem = (props: Props) => {
    return (
        <MemberItemContainer onClick={() => props.onClick(props.data.id)}>
            <MemberItemImageContainer>
                <MemberItemImage data={props.data.image} />
            </MemberItemImageContainer>

            <MemberItemDataContainer>
                <MemberItemDataNameContainer>
                    <MemberItemDataID>
                        {props.data.id}
                    </MemberItemDataID>

                    <MemberItemDataDivider>|</MemberItemDataDivider>

                    <MemberItemDataName>
                        {props.data.name}
                    </MemberItemDataName>
                </MemberItemDataNameContainer>

                <MemberItemDataCompanyContainer>
                    <MemberItemDataCompany>
                        {props.data.company}
                    </MemberItemDataCompany>
                </MemberItemDataCompanyContainer>

                <MemberItemDataCommentContainer>
                    <MemberItemDataComment>
                        {props.data.comment}
                    </MemberItemDataComment>
                </MemberItemDataCommentContainer>

                <MemberItemDataSnsContainer>
                    <MemberItemDataSnsBtn data={props.data.blog} type="blog"/>
                    <MemberItemDataSnsBtn data={props.data.facebook} type="facebook"/>
                    <MemberItemDataSnsBtn data={props.data.github} type="github"/>
                    <MemberItemDataSnsBtn data={props.data.instagram} type="instagram"/>
                    <MemberItemDataSnsBtn data={props.data.twitter} type="twitter"/>
                </MemberItemDataSnsContainer>
            </MemberItemDataContainer>

        </MemberItemContainer>
    );
};

const MemberItemImage = (props: { data: string }) => {
    return <img src={props.data} width="150px" height="150px"/>
};

const MemberItemDataSnsBtn = (props: { data: snsDataProps, type: string }) => {
    const data = props.data;
    const type = props.type;

    if(!data.isEnabled){
        return null;
    }

    return(
        <MemberItemDataSnsBtnContainer>
            <Link href={data.url} target="_blank">
                <MemberItemDataSnsBtnIcon type={type} />
            </Link>
        </MemberItemDataSnsBtnContainer>

    );
};

const MemberItemDataSnsBtnIcon = (props: { type: string }) => {
    const type = props.type;
        switch (type) {
            case "blog":
                return <FontAwesomeIcon icon={faHome} size="lg"/>;
            case "facebook":
                return <FontAwesomeIcon icon={faFacebook} size="lg"/>;
            case "github":
                return <FontAwesomeIcon icon={faGithub} size="lg"/>;
            case "instagram":
                return <FontAwesomeIcon icon={faInstagram} size="lg"/>;
            case "twitter":
                return <FontAwesomeIcon icon={faTwitter} size="lg"/>;
            default:
                return null;
    }
};

const MemberItemContainer = styled.div`
    height: 150px;
    width: 400px;
  
    margin: 30px;
  
    display: flex;
    flex-direction: row;
`;

const MemberItemImageContainer = styled.div`
    height: 150px;
    width: 150px;
`;

const MemberItemDataContainer = styled.div`
    height: 150px;
    width: 100%;
  
    padding-left: 15px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MemberItemDataNameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MemberItemDataCommentContainer = styled.div``;

const MemberItemDataCompanyContainer = styled.div``;

const MemberItemDataSnsContainer = styled.div`
    width: 100%;
  
    display: flex;
    flex-direction: row;
`;

const MemberItemDataSnsBtnContainer = styled.div`
    height: 30px;
    width: 30px;
  
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MemberItemDataComment = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 23px;
  
    margin: 5px 0;
`;

const MemberItemDataCompany = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 23px;
`;

const MemberItemDataID = styled.p`
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
`;

const MemberItemDataDivider = styled.p`
      font-size: 24px;
      font-weight: 800;
  
      margin: 0 10px;
`;

const MemberItemDataName = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 34px;
`;

type Props = {
    onClick: (id: string) => void,
    data: MemberData
}

type snsDataProps = {
    isEnabled: boolean,
    url: string
}

export default MembersListItem;