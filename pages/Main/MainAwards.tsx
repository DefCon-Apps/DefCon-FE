import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import * as API from "../../src/Common/API";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

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
  const desktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [isDesktop, setIsDesktop] = useState(true);
  const [mainEvent, setMainEvent] = useState(tmpEventData);

  useEffect(() => {
    if (!desktop) setIsDesktop(false);
    API.getMainEventData().then((apiResult: any) => {
      setMainEvent(apiResult);
    });
  }, [isDesktop]);

  return (
    <MainAwardsWrapper>
      <MainAwardsStyle>
        <AwardsTitle>
          <h1>{mainEvent.title}</h1>
        </AwardsTitle>
        <AwardsContents>
          {isDesktop ? (
            <AwardsContentsWrapper>
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
              <AwardsImage src={mainEvent.image}></AwardsImage>
            </AwardsContentsWrapper>
          ) : (
            <>
              <AwardsImage src={mainEvent.image}></AwardsImage>
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
            </>
          )}
        </AwardsContents>
      </MainAwardsStyle>
    </MainAwardsWrapper>
  );
};

const MainAwardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Noto Sans KR";

  @media screen and (min-width: 769px) {
    margin-bottom: 200px;
  }
`;

const MainAwardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    width: 80%;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media screen and (max-width: 768px) {
    align-items: center; 
  }
`;

const AwardsTitle = styled.div`
  @media screen and (min-width: 769px) {
    width: 60%;
    background: #00658F;
    border-radius: 2rem 2rem 2rem 2rem;
    box-shadow: 16px 64px 0 0 #35B6F7;
  }
  h1 {
    @media screen and (min-width: 769px) {
      width: 90%;
      text-align: right;
      font-size: 55pt;
      letter-spacing: -7px;
      color: #fff;
      
      padding: 96px 0 96px 32px;
      margin-right: 32px;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 35pt;
      letter-spacing: -5px;
      color: #000;
    }
  }
`;

const AwardsImage = styled.img`
  @media screen and (min-width: 769px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 250px;
  }
  
  margin-top: -64px;
  border-radius: 20px;
`;

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;
`;

const AwardsContents = styled.div`
  display: flex;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  margin-top: 2vh;

  p {
    font-weight: 100;
    @media screen and (min-width: 769px) {
      width: 80%;
      text-align: left;
      font-size: 18pt;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 5vh;
      margin-bottom: 5vh;
      text-align: center;
      font-size: 15pt;
    }
  }
`;

const AwardsContentsWrapper = styled.div`
  @media screen and (min-width: 769px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const AwardsContentsContext = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) {
    align-items: center; 
  }
`;

export default MainAwards;
