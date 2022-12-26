import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Hello DEF:CON</h1>

      <ul>
        <li><Link href="/Design">Design Page</Link></li>
        <li><Link href="/Members">Members Page</Link></li>
        <li><Link href="/Projects">Projects Page</Link></li>
      </ul>

      <p><Link href="/Privacy">Privacy Notice Page</Link></p>

    </div>
  )
}

export default Home;
