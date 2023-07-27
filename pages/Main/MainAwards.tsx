import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import * as API from "../../src/Common/API";
import { useState, useEffect } from "react";

type MainEventData = {
  title: string;
  content: string;
  image: string;
};

const tmpEventData: MainEventData = {
  title: "",
  content: "",
  image: "",
};

const MainAwards = () => {
  const [mainEvent, setMainEvent] = useState(tmpEventData);

  useEffect(() => {
    API.getMainEventData().then((apiResult: any) => {
      console.log(apiResult);
      setMainEvent(apiResult);
    });
  }, []);

  return (
    <MainAwardsWrapper>
      <AwardsTitle>
        <h1>{mainEvent.title}</h1>
      </AwardsTitle>
      <AwardsContents>
        <AwardsContentsContext>
          <p>{mainEvent.content}</p>
          <AwardsButton>
            <Link
              href="https://github.com/yymin1022/SeoulHealing"
              target="_blank"
              rel="noreferrer"
            >
              <Dbutton
                text={"SOUL REST GitHub"}
                textColor={"#FFFFFF"}
                textSize={20}
                width={15}
                height={3}
                btnColor={"#001E2E"}
                direction={"right"}
              />
            </Link>
          </AwardsButton>
        </AwardsContentsContext>
        <AwardsImage src={mainEvent.image} />
      </AwardsContents>
    </MainAwardsWrapper>
  );
};

const MainAwardsWrapper = styled.div`
  width: 65vw;
  height: 68vh;
  padding-top: 10rem;
  margin-bottom: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "Noto Sans KR";

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    align-items: center;
    margin-bottom: 25vh;
  }
`;

const AwardsTitle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  h1 {
    text-align: right;
    font-size: 5rem;
    letter-spacing: -7px;
    color: #000;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    width: 70vw;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 4rem;
      letter-spacing: -5px;
    }
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    width: 80vw;
    h1 {
      text-align: center;
      font-size: 2.3rem;
      letter-spacing: -2px;
    }
  }
`;

const AwardsContents = styled.div`
  display: flex;
  flex:1;
  font-weight: 100;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    width: 90%;
    text-align: left;
    font-size: 1.5rem;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    flex-direction: column-reverse;
    align-items: center;

    p {
      margin: 3vh 0vh 3vh 0vh;
      text-align: center;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    p {
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

const AwardsImage = styled.img`
  border-radius: 2rem;
  flex: 1;
  width:28vw;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    border-radius: 1.5rem;
    margin-top: 2vh;
    width: 60vw;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    margin-top: 2vh;
    width: 70vw;
  }
`;

const AwardsContentsContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    align-items: center;
    margin-right: 0;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
  }
`;

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default MainAwards;
