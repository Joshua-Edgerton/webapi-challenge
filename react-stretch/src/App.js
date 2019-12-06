import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import axios from "axios"

import Projects from "./components/Projects"
import ProjectInfo from "./components/ProjectInfo"

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:4300/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log("Failed to acquire projects", err))
  }, [])

  return (
    <>
      <Route exact path="/" render={props => <Projects {...props} projects={projects} />} />
      <Route  path="/projects/:id" render={props => <ProjectInfo {...props} projects={projects} setProjects={setProjects} />} />
    </>
  );
}

export default App;