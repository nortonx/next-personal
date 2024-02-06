"use client"

import { useState, useEffect } from "react";
import { Col, Container, ListGroup } from "react-bootstrap"

interface Repository {
  id: number;
  name: string;
  url: string;
  description: string;
}

const GithubPage = () => {
  const API_URL = 'https://api.github.com/users/nortonx/repos';
  const [repos, setRepos] = useState<any>([])
  

  useEffect(() => {
    // fetchData();
    console.log("Fetching github repositories...");
    fetch(API_URL)
        .then(response => response.json())
        .then(setRepos)
        .catch(error => console.error(error))
    console.log("Repos:", repos)
  }, [])


  return(
    <main data-testid="github-page">
      <Container>
        <Col>
          <p className="fs-3">Github repos:</p>
          <ListGroup as="ul">
            { repos.map((repo: Repository) => {
              return(
                <ListGroup.Item as="li" key={repo.id}>
                  <a 
                    href={repo.url}
                    target="_blank"
                  >
                    {repo.url}
                  </a>
                  <p>{repo.description}</p>
                </ListGroup.Item>

                
              )
            }) }
          </ListGroup>
        </Col>
      </Container>
    </main>
  )
}

export default GithubPage;