import React, { useEffect, useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { CgArrowTopLeftR } from "react-icons/cg";
import { Link,  } from "react-router-dom";
import {GraphQLClient, gql} from 'graphql-request';


const graphcms = new GraphQLClient('https://api-eu-central-1.hygraph.com/v2/cl7heqqb40oj301t1e64g29lp/master');

const QUERY = gql`
  {
    projects {
            title
            id
           tags
             image {
                 url
                fileName
           }
       source
     description
  }
  }
`;

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const {projects} = await graphcms.request(QUERY);
      setProjects(projects);
    }
    
    getPosts();
  }, [])
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
          <Link to="/">
          <CgArrowTopLeftR size={30} />
          </Link>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects && projects.map((project) => (
          <Col md={4} className="project-card">
        <ProjectCard key={project.id} project={project} />
        </Col>
        ))}
        </Row>
      </Container>
    </Container>
  );
}
/* export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
       props: {
         projects
       },
  };
} */

export default Projects;
