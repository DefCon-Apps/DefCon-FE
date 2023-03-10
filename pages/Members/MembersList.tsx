import styled from "styled-components";

import { MemberData } from "./Members";
import MembersListItem from "./MembersListItem";

const MembersList = (props: {memberData: Array<MemberData>, onClick: (id: string) => void}) => {
    return (
        <MembersListContainer>{
            props.memberData && props.memberData.map((item) => {
                return <MembersListItem key={item.id} data={item} onClick={props.onClick}/>
            })
        }</MembersListContainer>
    );
};

const MembersListContainer = styled.div`
    height: 100%;
    width: 100%;
  
    display: flex;
    flex-direction: column;
  
    margin-bottom: 100px;

    @media all and (min-width: 1280px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
    align-items: center;
    justify-content: center;
`;

export default MembersList;