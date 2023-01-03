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
            <MemberItemImageContainer>
                {props.data.image}
            </MemberItemImageContainer>

            <MemberItemDataContainer>
                <MemberItemDataNameContainer>
                    {props.data.id}
                    {props.data.name}
                </MemberItemDataNameContainer>
                <MemberItemDataCompanyContainer>
                    {props.data.company}
                </MemberItemDataCompanyContainer>
                <MemberItemDataCommentContainer>
                    {props.data.comment}
                </MemberItemDataCommentContainer>
                <MemberItemDataSnsContainer>
                    SNS_ITEMS
                </MemberItemDataSnsContainer>
            </MemberItemDataContainer>

        </MemberItemContainer>
    );
};

const MemberItemContainer = styled.div`
    height: 150px;
    width: 400px;
  
    display: flex;
    flex-direction: row;
`;

const MemberItemImageContainer = styled.div`
    height: 150px;
    width: 150px;
`;

const MemberItemDataContainer = styled.div`
    height: 150px;
    width: 250px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MemberItemDataNameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MemberItemDataCommentContainer = styled.div`

`;

const MemberItemDataCompanyContainer = styled.div`

`;

const MemberItemDataSnsContainer = styled.div`
      display: flex;
      flex-direction: row;
`;

export default MembersListItem;