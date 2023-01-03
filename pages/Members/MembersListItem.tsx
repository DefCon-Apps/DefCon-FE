import styled from "styled-components";

interface Props{
    data: {
        comment: string,
        company: string,
        id: string,
        image: string,
        name: string,
        sns: Array<snsData>
    }
}

interface snsData{
    isEnabled: boolean,
    url: string
}

const MembersListItem = (props: Props) => {
    return (
        <MemberItemContainer>
            {props.data.name}
        </MemberItemContainer>
    );
};

const MemberItemContainer = styled.div`
    height: 150px;
    width: 400px;
`;

export default MembersListItem;