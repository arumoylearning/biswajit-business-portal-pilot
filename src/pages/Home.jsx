export default function Home() {
  return (
    <div className="flex-grow-1">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Welcome to Business Portal</h1>
          <p className="lead mb-4">
            Your comprehensive solution for managing business operations efficiently and effectively.
          </p>
          <button className="btn btn-light btn-lg">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="bi bi-speedometer2 fs-1 text-primary"></i>
                </div>
                <h5 className="fw-bold">Fast Performance</h5>
                <p className="text-muted">Lightning-fast performance to keep your business running smoothly.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="bi bi-shield-lock fs-1 text-primary"></i>
                </div>
                <h5 className="fw-bold">Secure & Reliable</h5>
                <p className="text-muted">Enterprise-grade security to protect your sensitive business data.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="bi bi-diagram-2 fs-1 text-primary"></i>
                </div>
                <h5 className="fw-bold">Easy Integration</h5>
                <p className="text-muted">Seamlessly integrate with your existing tools and workflows.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-3">
                  <i className="bi bi-graph-up fs-1 text-primary"></i>
                </div>
                <h5 className="fw-bold">Analytics</h5>
                <p className="text-muted">Comprehensive analytics and reporting for data-driven decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">About Us</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://via.placeholder.com/400x300"
                alt="About"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <p className="lead mb-3">
                We provide a comprehensive business management platform designed to streamline your operations.
              </p>
              <p className="mb-3">
                With our intuitive interface and powerful features, managing your business has never been easier.
                Our team is committed to delivering innovative solutions that help your business grow and succeed.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 24/7 Customer Support</li>
                <li className="mb-2">✓ Regular Updates & Features</li>
                <li className="mb-2">✓ Scalable Infrastructure</li>
                <li className="mb-2">✓ Industry-Leading Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
