import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import { projects }from '../projects.js';

export default function Projects() {
    return (
        <Container className="my-4">
        <h1 className="mb-4 text-center">Projects</h1>
        <Row>
            {projects.map((p, i) => (
            <Col md={6} lg={4} key={i}>
                <ProjectCard project={p} />
            </Col>
            ))}
        </Row>
        </Container>
    );
}