import { Card, Badge, Button } from 'react-bootstrap';

export default function ProjectCard({ project }) {
  return (
    <Card className="mb-4 shadow">
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="mb-2">
          {project.tech.map((t, idx) => (
            <Badge bg="secondary" key={idx} className="me-1">{t}</Badge>
          ))}
        </div>
        {project.github && <Button href={project.github} target="_blank" className="me-2" variant="dark">GitHub Repo</Button>}
        {project.demo && <Button href={project.demo} target="_blank" variant="primary">Demo</Button>}
      </Card.Body>
    </Card>
  );
}