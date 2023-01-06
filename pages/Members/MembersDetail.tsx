import styled from "styled-components";

const MembersDetail = () => {
    return (
        <MembersDetailContainer>
            Members Detail
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

export default MembersDetail;