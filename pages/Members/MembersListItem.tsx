import styled from "styled-components";

interface Props{
    data: {
        comment: string,
        company: string,
        id: string,
        image: string,
        name: string,
        blog: snsDataProps,
        boj: snsDataProps,
        facebook: snsDataProps,
        github: snsDataProps,
        instagram: snsDataProps,
        twitter: snsDataProps
    }
}

type snsDataProps = {
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

                    <MemberItemDataDivider>|</MemberItemDataDivider>

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
                    <MemberItemDataSnsBtn data={props.data.boj} type="boj"/>
                    <MemberItemDataSnsBtn data={props.data.blog} type="blog"/>
                    <MemberItemDataSnsBtn data={props.data.facebook} type="facebook"/>
                    <MemberItemDataSnsBtn data={props.data.github} type="github"/>
                    <MemberItemDataSnsBtn data={props.data.instagram} type="instagram"/>
                    <MemberItemDataSnsBtn data={props.data.twitter} type="twitter"/>
                </MemberItemDataSnsContainer>
            </MemberItemDataContainer>

        </MemberItemContainer>
    );
};

const MemberItemDataSnsBtn = (props: { data: snsDataProps, type: string }) => {
    const data = props.data;
    const type = props.type;
    return(
        <>{type}</>
    );
};

const MemberItemDataSnsIcon = (props: { type: string }) => {
    const type = props.type;
    return(
        <>{type}</>
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
    width: 100%;
  
    padding-left: 15px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MemberItemDataNameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MemberItemDataCommentContainer = styled.div``;

const MemberItemDataCompanyContainer = styled.div``;

const MemberItemDataSnsContainer = styled.div`
      display: flex;
      flex-direction: row;
`;

const MemberItemDataComment = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
  
    margin: 5px 0;
`;

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

const MemberItemDataDivider = styled.p`
      font-size: 24px;
      font-weight: 800;
  
      margin: 0 10px;
`;

const MemberItemDataName = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 34px;
`;

export default MembersListItem;