import BackgroundCard from "../../src/Common/BackgroundCard";

interface Props{
    width: string;
}

const MainRectangle = (props : Props) => {
    return (
        <BackgroundCard
            key="MembersRectangle"
            color="#35B6F7"
            width="50rem"
            height="80rem"
            translateX="900px"
            translateY="250px"
            type="bordered"
        />
    );
};


export default MainRectangle;