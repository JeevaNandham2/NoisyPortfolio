import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1 Post.gif";
import projImg2 from "../assets/img/VFX.gif";
import projImg3 from "../assets/img/INFLUENCER.gif";
import projImg4 from "../assets/img/YOUTUBE VIDEOS.gif";
import projImg5 from "../assets/img/THUMBNAILS.gif";
import projImg6 from "../assets/img/PHOTOSHOOT.gif";
import projImg7 from "../assets/img/WEDDING VIDEOS.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "COMMERCIAL SHOPS",
      description: "A modern, stylish commercial shop designed to elevate your business.",
      imgUrl: projImg1,
      link : "https://drive.google.com/drive/folders/1ltOq10J1J_jxb8ZifXoXjQzmG4K6Q-ea?usp=sharing"
    },
    {
      title: "VFX & MotionGraphics",
      description: "Dynamic VPX motion graphics that captivate and elevate your brand.",
      imgUrl: projImg2,
      link : "https://drive.google.com/drive/folders/1TJpDQ5pWS0ekjF6Ygq78Bu_uaXnD89Rw"
    },
    {
      title: "CONTENT CREATION",
      description: "Creative content that inspires, engages, and drives results.",
      imgUrl: projImg3,
      link : "https://drive.google.com/drive/folders/1DBNNYvDcagwLHKnOHdVkaIAlr6c1I8Lv"
    },
    {
      title: "YOUTUBE VIDEOS",
      description: "Eye-catching thumbnails that boost clicks and engagement.",
      imgUrl: projImg4,
      link : "https://youtu.be/OH0ksqcZVpk"
    },
    {
      title: "Business Startup",
      description: " ",
      imgUrl: projImg5,
      
    },
    {
      title: "Photography",
      description: " ",
      imgUrl: projImg6,
    },
    {
      title: "Photography",
      description: " ",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p> My passion for problem-solving and my commitment to continuous improvement drive me to take on challenging projects that push my skills further, ensuring that each application I build meets both user needs and business goals..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}