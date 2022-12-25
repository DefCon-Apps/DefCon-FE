import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Hello DEF:CON</h1>

      <ul>
        <li><Link href="/designPage">Design Page</Link></li>
        <li><Link href="/membersPage">Members Page</Link></li>
        <li><Link href="/projectsPage">Projects Page</Link></li>
      </ul>

      <p><Link href="/privacyNoticePage">Privacy Notice Page</Link></p>

    </div>
  )
}

export default Home;
