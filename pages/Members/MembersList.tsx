import styled from "styled-components";
import MembersListItem from "./MembersListItem";

const MembersList = () => {
    return (
        <MembersListContainer>
            <MembersListItem />
            <MembersListItem />
            <MembersListItem />
            <MembersListItem />
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
`;

export default MembersList;