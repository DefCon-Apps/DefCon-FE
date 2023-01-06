import styled from "styled-components";

const MembersDetail = () => {
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
                <MembersDetailTitle>Solved. ac</MembersDetailTitle>
                HISTORY_DATA
            </MembersDetailHistodyContainer>
        </MembersDetailContainer>
    );
};

const MembersDetailContainer = styled.div`
      height: 100%;
      width: 100%;
    
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    
      margin: 30px 0 100px 0;
`;

const MembersDetailBojContainer = styled.div``;

const MembersDetailCompanyContainer = styled.div``;

const MembersDetailHistodyContainer = styled.div``;

const MembersDetailTitle = styled.p``;

export default MembersDetail;