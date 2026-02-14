export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {currentYear} Business Portal. All rights reserved.
        </p>
        <p className="mt-2 small">
          Built with React, React Router, and Bootstrap
        </p>
      </div>
    </footer>
  );
}
