import { Link } from '@remix-run/react';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/posts`}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
