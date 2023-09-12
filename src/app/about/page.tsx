"use client"

import { Container, Row, Col, ListGroup } from "react-bootstrap";
import styles from "./page.module.css"

const AboutPage = () => {
  const ITEMS = [
    {
      name: 'Next.JS 13',
      url: 'https://nextjs.org/'
    },
    {
      name: 'Typescript',
      url: 'https://www.typescriptlang.org/'
    },
    {
      name: 'React Bootstrap',
      url: 'https://react-bootstrap.github.io/'
    },
    {
      name: 'CSS Modules',
      url: 'https://github.com/css-modules/css-modules'
    }
  ];

  return(
    <main data-testid="about">
      <Container>
        <Row>
          <Col>
            <div>
              <p className="fs-3">This website was built with:</p>
              <ListGroup as="ul">
                {ITEMS.map(item => {
                  return(
                    <ListGroup.Item as="li" key={item.name}>
                      <a 
                        href={item.url} 
                        target="_blank"
                        className={styles.link}
                      >
                        {item.name}
                      </a>
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </div>
          </Col>
          <Col></Col>
          
        </Row>
      </Container>
    </main>
  )
}

export default AboutPage;