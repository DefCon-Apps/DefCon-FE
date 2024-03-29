import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { MemberData } from "./Members";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const MembersDetail = React.forwardRef((props: {isFirstClicked: boolean, memberData: MemberData}, ref: React.ForwardedRef<HTMLDivElement>) => {
    if(!props.isFirstClicked){
        return null;
    }

    return (
        <MembersDetailContainer ref={ref}>
            <MembersDetailScrollSign icon={faAngleDoubleDown} color="#4C6170" size="5x" />
            <MembersDetailCompanyContainer>
                <Image alt={"Company Logo"} src={props.memberData.data && props.memberData.data.company_img} width="200" height="200" unoptimized={true} />
            </MembersDetailCompanyContainer>
            {
                props.memberData.data.boj.isEnabled ?
                    <MembersDetailBojContainer>
                        <MembersDetailTitle>Solved. ac</MembersDetailTitle>
                        <MembersDetailBojImage alt={"BOJ Badge"} src={`https://mazassumnida.wtf/api/v2/generate_badge?boj=${props.memberData.data && props.memberData.data.boj.username}`} width="350" height="175" unoptimized={true} />
                    </MembersDetailBojContainer>
                    : null
            }
            <MembersDetailHistoryContainer>
                <MembersDetailTitle>History</MembersDetailTitle>
                {
                    props.memberData.data && props.memberData.data.history.map((item) => {
                        return <MemberDetailHistoryItem key={item.content} historyData={item} />
                    })
                }
            </MembersDetailHistoryContainer>
        </MembersDetailContainer>
    );
});

const MemberDetailHistoryItem = (props: {historyData: {content: string, date: string}}) => {
    return(
        <MembersDetailHistoryItemContainer>
            <MembersDetailHistoryDate>{props.historyData.date}</MembersDetailHistoryDate>
            <MembersDetailHistoryContent>{props.historyData.content}</MembersDetailHistoryContent>
        </MembersDetailHistoryItemContainer>
    )
}

const MembersDetailContainer = styled.div`
    @media screen and (min-width: 1280px) {
        height: 780px;    
    }
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 30px 0 0 0;

    border: 1rem solid;
    border-color: #35B6F7;
    border-radius: 2rem;
`;

const MembersDetailBojContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailBojImage = styled(Image)`
    @media all and (max-width:479px) {
        width: 320px;
        height: 160px;
    }
    width: 350px;
    height: 175px;
`;

const MembersDetailCompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailHistoryItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    margin: 0 0 30px 0;
`;

const MembersDetailHistoryContent = styled.p`
    font-size: 20px;
    font-weight: 300;
`;

const MembersDetailHistoryDate = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

const MembersDetailTitle = styled.p`
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
  
    margin: 0 0 15px 0;
`;

const MembersDetailScrollSign = styled(FontAwesomeIcon)`
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }
    @media screen and (min-width: 1280px) {
        display: unset;
        opacity: 0.5;
        animation: float 1.5s ease-in-out infinite;
    }
    display: none;
`;

MembersDetail.displayName = "MembersDetail";
export default MembersDetail;