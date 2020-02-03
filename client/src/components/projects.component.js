import React from "react";
import {Card, Row, Container, Col} from "react-bootstrap";
import Portfolio from "./images/portfolio.png"; 
import Hangman from "./images/hangman.png"; 
import Dads from "./images/dads.png"; 
import Trivia from "./images/trivia.png"; 
import RPS from "./images/RPS.png"; 
import Giftastic from "./images/giftastic.png"; 
import FMF from "./images/fmf.png"; 
import NiceCity from "./images/niceCity.png"; 
import Clicky from "./images/clicky.png"; 
import Scraper from "./images/scraper.png"; 
import GoogleBooks from "./images/googleBooks.png"
import Burger from "./images/burger.png"
import FriendFinder from "./images/friendFinder.png"
import NumNauts from "./images/numNauts.png"


const IndividualProjects = (props) => {
return (
      <div className = "projects" >
        <Container className = "projectsContainer">
<Row>
  <Col>
    <Card className = "project 2" >
      <Card.Body>
        <Card.Title title = "Shakspearean Hangman"></Card.Title><h6>Shakspearean Hangman</h6>
        <Card.Img className="" src = {Hangman}  href = "" alt = "Shakspearean Hangman"></Card.Img>
        <Card.Link href = "https://nyleesia.github.io/My-Hangman-Game/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/My-Hangman-Game">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card className = "project 3" >
      <Card.Body>
        <Card.Title title = "Dad Wars"></Card.Title><h6>Dad Wars</h6>
        <Card.Img className="" src = {Dads}  href = "" alt = "Dad Wars"></Card.Img>
        <Card.Link href = " https://nyleesia.github.io/unit-4-game/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/unit-4-game">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 4" >
      <Card.Body>
        <Card.Title title = "Trivia Game"></Card.Title><h6>Trivia Game</h6>
        <Card.Img className="" src = {Trivia}  href = "" alt = "Trivia Game"></Card.Img>
        <Card.Link href = "https://nyleesia.github.io/TriviaGame/">URL</Card.Link>
        <Card.Link href= " https://github.com/Nyleesia/TriviaGame">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card className = "project 5" >
      <Card.Body>
        <Card.Title title = "Giftastic"></Card.Title><h6>Giftastic</h6>
        <Card.Img className="" src = {Giftastic}  href = "" alt = "Giftastic"></Card.Img>
        <Card.Link href = "https://nyleesia.github.io/Giftastic/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/Giftastic">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 6" >
      <Card.Body>
        <Card.Title title = "RPS (Multiplayer)"></Card.Title><h6>RPS (Multiplayer)</h6>
        <Card.Img className="" src = {RPS}  href = "" alt = "RPS (Multiplayer)"></Card.Img>
        <Card.Link href = "https://nyleesia.github.io/RPS-Multiplayer/">URL</Card.Link>
        <Card.Link href= " https://github.com/Nyleesia/RPS-Multiplayer">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card className = "project 7" >
      <Card.Body>
        <Card.Title title = "Find My Fit (Team)"></Card.Title><h6>Find My Fit</h6>
        <Card.Img className="" src = {FMF}  href = "" alt = "Find My Fit"></Card.Img>
        <Card.Link href = " https://ryanweingart.github.io/Group-Project-1/">URL</Card.Link>
        <Card.Link href= "https://github.com/ryanweingart/Group-Project-1">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 8" >
      <Card.Body>
        <Card.Title title = "LIRI-BOT"></Card.Title><h6>LIRI-BOT</h6>
        <Card.Img className="" ></Card.Img>
        <h5>CLI Application</h5>
        <Card.Link href = "  https://www.youtube.com/watch?v=zcsqzdLFnS0&feature=youtu.be">  Demo </Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/LIRI-BOT">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card className = "project 9" >
      <Card.Body>
        <Card.Title title = "CLI Word Guess"></Card.Title><h6>CLI Word Guess</h6>
        <Card.Img className="" ></Card.Img>
        <h5>CLI Application</h5>
        <Card.Link href = "https://drive.google.com/file/d/1uAuboihEbfkHucZ3_DyBhq544uBQPsha/view">  Demo</Card.Link>
        <Card.Link href= " https://github.com/Nyleesia/Constructor-Word-Guess">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 10" >
      <Card.Body>
        <Card.Title title = "Bamazon"></Card.Title><h6>Bamazon</h6>
        <Card.Img className="" ></Card.Img>
       <h5>CLI Application</h5>
        <Card.Link href = ""> Demo</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/bamazon">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card className = "project 11" >
      <Card.Body>
        <Card.Title title = "Friend Finder"></Card.Title><h6>Friend Finder</h6>
        <Card.Img className="" src = {FriendFinder}  href = "" alt = "Friend Finder"></Card.Img>
        <Card.Link href = "https://mighty-reaches-74306.herokuapp.com/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/FriendFinder">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 12" >
      <Card.Body>
        <Card.Title title = "Irie Burgers"></Card.Title><h6>Irie Burgers</h6>
        <Card.Img className="" src = {Burger}  href = "" alt = "Irie Burgers"></Card.Img>
        <Card.Link href = "https://limitless-bastion-78501.herokuapp.com">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/burger">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
    <Card className = "project 13" >
      <Card.Body>
        <Card.Title title = "NiceCity"></Card.Title><h6>NiceCity</h6>
        <Card.Img className="" src = {NiceCity}  href = "" alt = "NiceCity"></Card.Img>
        <Card.Link href = "https://nicecity-app.herokuapp.com/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/PROJECT2">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col>
    <Card className = "project 14" >
      <Card.Body>
        <Card.Title title = "News Scraper"></Card.Title><h6>News Scraper</h6>
        <Card.Img className="" src = {Scraper}  href = "" alt = "News Scraper"></Card.Img>
        <Card.Link href = "https://morning-reef-53880.herokuapp.com/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/News-Scraper">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card className = "project 15" >
      <Card.Body>
        <Card.Title title = "Clicky Game"></Card.Title><h6>Clicky Game</h6>
        <Card.Img className="" src = {Clicky}  href = "" alt = "Clicky Game"></Card.Img>
        <Card.Link href = "https://murmuring-temple-46784.herokuapp.com/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/clickyMemoryGame">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col>
    <Card className = "project 16" >
      <Card.Body>
        <Card.Title title = "Google Books Search"></Card.Title><h6>Google Books Search</h6>
        <Card.Img className="" src = {GoogleBooks}  href = "" alt = "Google Books Search"></Card.Img>
        <Card.Link href = "https://fierce-chamber-86717.herokuapp.com/saved">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/googlebooks">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card className = "project 17" >
      <Card.Body>
        <Card.Title title = "NumberNauts"></Card.Title><h6>NumberNauts</h6>
        <Card.Img className="" src = {NumNauts}  href = "" alt = "NumberNauts"></Card.Img>
        <Card.Link href = "https://numbernauts.herokuapp.com/">URL</Card.Link>
        <Card.Link href= "https://github.com/Nyleesia/FriendFinder">Repo</Card.Link>
      </Card.Body>
    </Card>
  </Col>
 
</Row>
  </Container>

    <br/>
    <br/>
    <br/>
 </div> 
)
}

export default IndividualProjects;