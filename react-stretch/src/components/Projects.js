import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Projects = ({ history, projects }) => {
   

    return (
        <Container>
            <h1> React Stretch Project </h1>
            <ProjectContainer>
                {
                    projects.map(project => (
                        <ProjectCard>
                            <button onClick={() => history.push(`/projects/${project.id}`)}>View Project Actions</button>
                        </ProjectCard>
                    ))
                }
            </ProjectContainer>
        </Container>
    )
}

export default Projects

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProjectContainer = styled.div`
    width: 50%;
    padding: 20px;
    background: green;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const ProjectCard = styled.div`
    background: lime;
    width: 200px;
    height: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
`;