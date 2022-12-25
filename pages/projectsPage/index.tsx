import Link from "next/link";

const ProjectsPageIndex = () => {
    return(
        <>
          <h1>Here is Projects Page</h1>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/projectsPage/[projName]" as="/projectsPage/SoulRest">뷰</Link></p>
        </>
    )
}

export default ProjectsPageIndex;