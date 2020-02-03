import React, {Component} from "react";
import {Card }from "react-bootstrap"; 

class ProjectCard extends Component {
    render(){
    return(
      <div className = "projectsContainer">
        <Card>
            <Card.Body>
                <Card.Title>
                    {this.props.name}
                </Card.Title>
                <Card.Img src = {this.props.photo}>
                </Card.Img>
                <Card.Subtitle> Languages:
                    {this.props.languages}
                </Card.Subtitle>
                <Card.Link href= {this.props.URL}> URL
                </Card.Link>  
                <Card.Link href= {this.props.repo}>Repo
                </Card.Link>
            </Card.Body>
        </Card>
      </div>  
    )
}
}

export default ProjectCard;