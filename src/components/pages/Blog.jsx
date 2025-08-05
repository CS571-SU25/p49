import { Container, Row, Col } from 'react-bootstrap';
import { blogPosts } from '../blogPosts.js';
import BlogCard from '../BlogCard';

export default function Blog() {
  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Blog</h1>
      <Row>
        {blogPosts.map((post, i) => (
          <Col md={6} lg={4} key={i}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}