"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <main className="p-5 mb-4 rounded-3" data-testid="main">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">Norton Almeida</h1>
        <p className="col-md-8 fs-4">Frontend Developer - Javascript | Typescript | Vue.js | React | Next.js</p>
        <Button variant="primary">Click me</Button>
      </Container>
      <Row className="align-items-md-stretch">
        <Col className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>About me:</h2>
            <p>As a Senior Front-end developer, I deliver high-quality web solutions using cutting-edge technologies and best practices. I have 10+ years of experience in web development, with a focus on front-end/UI engineering for the past 8+ years.</p>

            <p>I have strong skills in Vue.js, HTML5, CSS, and Javascript, as well as experience with Ruby on Rails, PostgreSQL, MySQL, SQL Server, and other tools and frameworks such as React, Node.js. I am fluent in English and Portuguese, and I have a bachelor's degree in Information Systems. I am passionate about continuous learning, teamwork, collaboration, and adaptability. I always seek to go deep and specialize in the stack I am currently working on, and to deliver the best results for clients.</p>
            <Button variant="primary" href="https://www.linkedin.com/in/norton-almeida/">LinkedIn Profile</Button>
          </div>
        </Col>
        <Col className="col-md-6" style={{'display': 'none'}}>
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Add Borders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni numquam unde dolores accusamus tempore ullam neque sequi vitae? Quidem sapiente dolorem dolore est, fuga natus placeat necessitatibus odit exercitationem.</p>
            <Button variant="outline-secondary">Example Button</Button>
          </div>
        </Col>
      </Row>
    </main>
  )
}
