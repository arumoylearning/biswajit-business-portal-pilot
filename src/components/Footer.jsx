export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {currentYear} Royal Packaging. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
