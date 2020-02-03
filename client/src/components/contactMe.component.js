import React from "react"; 
import { Card } from "react-bootstrap";

const ContactMe = (props) => {
    return(
        <div className= "contactMeContainer">
         
          <div id = "contactMe"> 
            <Card className = "contactInfo">  <h3 className ="contactCardHead">Contact Me</h3>   
              <img className = "photo2" alt = ""></img>
              <div><img className = "contactLogos" src = "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png" alt = "" href = "https://www.facebook.com/nyleesia/"></img><Card.Link className = "contactLink" href = "https://www.facebook.com/nyleesia/">
            www.facebook.com/Nyleesia
            </Card.Link></div>
            
            <div><img className = "contactLogos" src = "https://1000logos.net/wp-content/uploads/2017/08/Fiverr-emblem.jpg" alt = "" href = "https://www.fivrr.com/nyleesia/"></img><Card.Link className = "contactLink" href = "https://www.fivrr.com/nyleesia/">
            www.fivrr.com/Nyleesia
            </Card.Link></div>
           
              <div><img className = "contactLogos" src = "data:image/png;base64,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" alt = "" href = "https://www.github.com/Nyleesia/"></img><Card.Link className = "contactLink" href = "https://www.github.com/Nyleesia/">
              www.github.com/Nyleesia
            </Card.Link></div>
          
             <div><img className = "contactLogos"src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt = "" href = "https://www.linkedin.com/in/nyleesia/"></img><Card.Link className = "contactLink" href = "https://www.linkedin.com/in/nyleesia/" > 
              www.linkedin.com/in/nyleesia
            </Card.Link></div> 
         
          </Card>
             </div>
             
             </div>

    )
}

export default ContactMe;