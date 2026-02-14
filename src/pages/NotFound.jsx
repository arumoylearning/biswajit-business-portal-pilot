import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-grow-1">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-4 text-muted">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
