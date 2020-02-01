import React, {Component} from "react";
import Project from "./project.component";
import axios from "axios";

class Projects extends Component {
    state = {
        project : [{
            id: "",
            name : "",
            photo : "",
            languages : "",
            URL : "",
            repo : ""
        }]
    }

    componentDidMount() {
        this.loadProjects()
    }

    loadProjects = (req, res) => {
        axios.get("/projects", { 
            id: this.state._id,
            name : this.state.name, 
            photo : this.state.photo,
            languages : this.state.languages,
            URL : this.state.URL,
            repo : this.state.repo
        })
        .then(res => {
           console.log(res);
           this.setState({project : res.data});
        })
        .catch(err => {
            console.log(err);
          });
        
     };


    render(){
        console.log(this.state.project)

        return(
            <div id = "projects">
                <Project project = {this.state.project}/>
            </div>
        )
    }
}

export default Projects;