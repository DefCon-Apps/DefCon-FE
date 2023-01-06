import styled from "styled-components";
import MembersListItem from "./MembersListItem";
import { MemberData } from "./Members";

const MembersList = (props: {memberData: Array<MemberData>, onClick: (id: string) => void}) => {
    return (
        <MembersListContainer>
            {
                props.memberData.map((item) => {
                    return <MembersListItem data={item} onClick={props.onClick}/>
                })
            }
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
  
    margin-bottom: 100px;
`;

export default MembersList;