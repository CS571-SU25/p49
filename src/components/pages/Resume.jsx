import { Button, Container } from 'react-bootstrap';

export default function Resume() {
  return (
    <Container className="my-5 text-center">
      <h1 className="mb-4">Sam Lee's Resume</h1>
      
      {/* View On Another Tab*/}
      <Button
        href="/p49/Sam_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="me-3"
      >
        View
      </Button>

      {/* Download */}
      <Button
        href="/p49/Sam_Resume.pdf"
        download="SamLee_Resume.pdf"
        variant="primary"
      >
        Download PDF
      </Button>
    </Container>
  );
}