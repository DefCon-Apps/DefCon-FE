import { useRouter } from "next/router";

const ProjectDetail = ()=> {
    const router = useRouter();
    const projectName = router.query.ProjectDetail;

    return(
        <div>
            <h1>Here is projectView Page</h1>
            <h1>name : { projectName }</h1>
        </div>
    )

}

export default ProjectDetail;