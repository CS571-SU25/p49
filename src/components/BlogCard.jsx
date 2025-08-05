import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-4 shadow">
      {post.image && <Card.Img variant="top" src={post.image} />}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
        <Card.Text>{post.summary}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/blog/${post.slug}`)}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}