import styled from "styled-components";
import { MemberData } from "./Members";

const MembersDetail = (props: {memberData: MemberData}) => {
    return (
        <MembersDetailContainer>
            <MembersDetailCompanyContainer>
                COMPANY_LOGO
            </MembersDetailCompanyContainer>
            <MembersDetailBojContainer>
                <MembersDetailTitle>Solved. ac</MembersDetailTitle>
                BOJ_DATA
            </MembersDetailBojContainer>
            <MembersDetailHistoryContainer>
                <MembersDetailTitle>History</MembersDetailTitle>
                {
                    props.memberData.history.map((item) => {
                        return <MemberDetailHistoryItem historyData={item} />
                    })
                }
            </MembersDetailHistoryContainer>
        </MembersDetailContainer>
    );
};

const MemberDetailHistoryItem = (props: {historyData: {content: string, date: string}}) => {
    return(
        <>
            <p>{props.historyData.date}</p>
            <p>{props.historyData.content}</p>
        </>
    )
}

const MembersDetailContainer = styled.div`
      height: 100%;
      width: 100%;
    
      display: flex;
      flex-direction: column;
      align-items: center;
    
      margin: 30px 0 100px 0;
`;

const MembersDetailBojContainer = styled.div``;

const MembersDetailCompanyContainer = styled.div``;

const MembersDetailHistoryContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`;

const MembersDetailTitle = styled.p`
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
`;

export default MembersDetail;