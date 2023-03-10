import { ScrollMenu } from "react-horizontal-scrolling-menu";
import * as API from "../../src/Common/API"
import ProjectListItem from "./ProjectListItem";

interface Props {
  list: API.ProjectListItem[];
}

const ProjectList = (props: Props) => {
  return (
    <ScrollMenu>
      {props.list && props.list.map((item, i) => {
        return <ProjectListItem key={i} id={item.id} image={item.data.image[0]} title={item.data.title} />
      })}
    </ScrollMenu>
  );
}

export default ProjectList