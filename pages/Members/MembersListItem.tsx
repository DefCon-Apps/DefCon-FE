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
                    <MemberItemDataID>
                        {props.data.id}
                    </MemberItemDataID>

                    <MemberItemDataName>
                        {props.data.name}
                    </MemberItemDataName>
                </MemberItemDataNameContainer>

                <MemberItemDataCompanyContainer>
                    <MemberItemDataCompany>
                        {props.data.company}
                    </MemberItemDataCompany>
                </MemberItemDataCompanyContainer>

                <MemberItemDataCommentContainer>
                    <MemberItemDataComment>
                        {props.data.comment}
                    </MemberItemDataComment>
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

const MemberItemDataComment = styled.p``;

const MemberItemDataCompany = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
`;

const MemberItemDataID = styled.p`
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
`;

const MemberItemDataName = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 34px;
`;

export default MembersListItem;