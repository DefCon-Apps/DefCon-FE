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
      setMainEvent(apiResult);
    });
  });

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
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Noto Sans KR";

  @media screen and (min-width: 1280px) {
    align-items: flex-end;
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: 200px;
    align-items: center;
  }
`;

const AwardsTitle = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media screen and (min-width: 1280px) {
    background: #00658f;
    border-radius: 2rem;
    box-shadow: 16px 64px 0 0 #35b6f7;
  }

  h1 {
    @media screen and (min-width: 1280px) {
      align-items: flex-end;
      text-align: right;
      font-size: 53pt;
      letter-spacing: -7px;
      color: #fff;
      padding: 96px 0 96px 32px;
      margin-right: 15px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      align-items: center;
      text-align: center;
      font-size: 45pt;
      letter-spacing: -5px;
    }

    @media screen and (max-width: 1023px) {
      text-align: center;
      font-size: 32pt;
      letter-spacing: -2px;
      color: #000;
    }
  }
`;

const AwardsContents = styled.div`
  display: flex;
  font-weight: 100;
  margin-top: -5rem;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media screen and (max-width: 1279px) {
    margin-top: 2vh;
    flex-direction: column-reverse;
    align-items: center;
  }

  p {
    letter-spacing: -1px;
    @media screen and (min-width: 1280px) {
      flex: 3;
      text-align: left;
      font-size: 20pt;
      margin-right: 220px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      text-align: center;
      font-size: 20pt;
      margin: 2rem 0 2rem 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      text-align: center;
      font-size: 18pt;
      margin: 2rem 0 2rem 0;
    }

    @media screen and (max-width: 768px) {
      margin: 2rem 0 2rem 0;
      text-align: center;
      font-size: 16pt;
    }
  }
`;

const AwardsImage = styled.img`
  border-radius: 2rem;
  @media screen and (min-width: 1280px) {
    flex: 1;
    width: 500px;
    height: 332px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    margin-top: 2vh;
    width: 400px;
    height: 266px;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 2vh;
    width: 400px;
    height: 266px;
  }
`;

const AwardsContentsContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
    margin-right: 75px;
  }

  @media screen and (max-width: 1023px) {
    align-items: center;
  }
`;

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;
`;

export default MainAwards;
