import { useParams } from 'react-router';
import { blogPosts } from './blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="my-5">
      <h1>{post.title}</h1>
      <p className="text-muted">{post.date}</p>
      <img src={post.image} alt={post.title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
      <p className="mt-4">
        This is my first blog. I'm currently learning React and whoever made this must be a genius.
      </p>
    </div>
  );
}