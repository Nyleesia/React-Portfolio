import React, {Component} from "react"; 
import ProjectCard from "./projectCard.component";

class Project extends Component {
    render(){
        console.log(this.props.project)

        return (
            this.props.project.map((project) => (
                <ProjectCard key = {project.id} project = {project} name = {project.name} photo = {project.photo} languages = {project.languages} URL = {project.URL} repo = {project.repo} />
            )  
        ))
    }
}
    
export default Project;