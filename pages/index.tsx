import Link from "next/link"
import styled from "styled-components"

const Home = () => {
  return (
    <HomeStyle>
      <h1>Hello DEF:CON</h1>

      <ul>
        <li><Link href="/Design">Design Page</Link></li>
        <li><Link href="/Members">Members Page</Link></li>
        <li><Link href="/Projects">Projects Page</Link></li>
      </ul>

      <p><Link href="/Privacy">Privacy Notice Page</Link></p>

    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  font-family: 'Noto Sans KR';
  padding-top: 4rem;
`

// 12월 27일 해야할 일
// 전역 폰트 설정하기
// 푸터 완성하기

export default Home;
