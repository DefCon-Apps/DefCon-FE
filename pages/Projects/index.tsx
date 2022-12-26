import Link from "next/link";

const ProjectsIndex = () => {
    return(
        <>
          <h1>Here is Projects Page</h1>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/Projects/[ProjectDetail]" as="/Projects/SoulRest">뷰</Link></p>
        </>
    )
}

export default ProjectsIndex;