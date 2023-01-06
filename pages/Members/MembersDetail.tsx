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
            <MembersDetailHistodyContainer>
                <MembersDetailTitle>History</MembersDetailTitle>
                {
                    props.memberData.history.map((item) => {
                        return <>History Items</>
                    })
                }
            </MembersDetailHistodyContainer>
        </MembersDetailContainer>
    );
};

const MembersDetailContainer = styled.div`
      height: 100%;
      width: 100%;
    
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    
      margin: 30px 0 100px 0;
`;

const MembersDetailBojContainer = styled.div``;

const MembersDetailCompanyContainer = styled.div``;

const MembersDetailHistodyContainer = styled.div``;

const MembersDetailTitle = styled.p`
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
`;

export default MembersDetail;