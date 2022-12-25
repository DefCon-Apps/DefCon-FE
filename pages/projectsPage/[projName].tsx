import { useRouter } from "next/router";

const projName = ()=> {
    const router = useRouter();
    const projectName = router.query.projName;

    return(
        <div>
            <h1>Here is projectView Page</h1>
            <h1>name : { projectName }</h1>
        </div>
    )

}

export default projName;