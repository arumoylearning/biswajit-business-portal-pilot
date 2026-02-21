import img1 from '../asset/img/img-1.jpeg';
import img2 from '../asset/img/img-2.jpeg';
import img3 from '../asset/img/img-3.jpeg';
import '../styles/Home2.css';

export default function Home2() {
  return (
    <div className="flex-grow-1">
      {/* Hero Section */}
      <section className="hero-section py-5 py-lg-7">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Quality Packaging.
                <span className="text-primary"> Made Simple.</span>
              </h1>
              <p className="lead text-muted mb-4">
                Since 2009, Royal Packaging has been delivering durable, customized corrugated solutions to industries across India. Fast, reliable, and built to last.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-5">Get Quote</button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={img1} alt="Royal Packaging Facility" className="img-fluid rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Gradient */}
      <div style={{ height: '40px', background: 'linear-gradient(90deg, #0d6efd 0%, transparent 100%)' }}></div>

      {/* Key Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            Why Royal Packaging?
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card text-center">
                <div className="feature-icon mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                    ✓
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Customized Solutions</h5>
                <p className="text-muted">Tailored packaging for your specific product dimensions and branding needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-card text-center">
                <div className="feature-icon mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                    ⚙️
                  </div>
                </div>
                <h5 className="fw-bold mb-3">20+ Years Experience</h5>
                <p className="text-muted">Established in 2009 with proven expertise in corrugated manufacturing.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-card text-center">
                <div className="feature-icon mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                    🚚
                  </div>
                </div>
                <h5 className="fw-bold mb-3">On-Time Delivery</h5>
                <p className="text-muted">Reliable dispatch with 20 tons/day manufacturing capacity.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-card text-center">
                <div className="feature-icon mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                    💎
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Quality Assured</h5>
                <p className="text-muted">Rigorous quality control at every stage of manufacturing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Gradient */}
      <div style={{ height: '40px', background: 'linear-gradient(90deg, transparent 0%, #0d6efd 100%)' }}></div>

      {/* Products Section */}
      <section id="products" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Products</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="product-card rounded shadow-sm overflow-hidden h-100">
                <img src={img2} alt="Plain Corrugated Boxes" className="w-100" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="p-4">
                  <h5 className="fw-bold mb-3">📦 Plain Corrugated Boxes</h5>
                  <p className="text-muted mb-0">Standard corrugated packaging solutions for various industrial applications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="product-card rounded shadow-sm overflow-hidden h-100">
                <img src={img3} alt="Printed Corrugated Boxes" className="w-100" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="p-4">
                  <h5 className="fw-bold mb-3">🎨 Printed Corrugated Boxes</h5>
                  <p className="text-muted mb-0">Custom-printed packaging with your branding and design specifications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="product-card rounded shadow-sm overflow-hidden h-100">
                <img src={img1} alt="Corrugated Paper Rolls" className="w-100" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="p-4">
                  <h5 className="fw-bold mb-3">📋 Corrugated Paper Rolls</h5>
                  <p className="text-muted mb-0">High-quality paper rolls for packaging and industrial wrapping needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="service-item p-4 rounded bg-white shadow-sm">
                <div className="mb-3" style={{ fontSize: '32px' }}>📏</div>
                <h5 className="fw-bold mb-2">Custom Packaging Solutions</h5>
                <p className="text-muted mb-0">Packaging designed specifically for your product specifications and requirements.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item p-4 rounded bg-white shadow-sm">
                <div className="mb-3" style={{ fontSize: '32px' }}>🖨️</div>
                <h5 className="fw-bold mb-2">Professional Printing</h5>
                <p className="text-muted mb-0">Advanced printing capabilities for custom designs and branding on boxes.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item p-4 rounded bg-white shadow-sm">
                <div className="mb-3" style={{ fontSize: '32px' }}>📦</div>
                <h5 className="fw-bold mb-2">Bulk Supply</h5>
                <p className="text-muted mb-0">Reliable supply of paper reels and packaging materials for ongoing needs.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item p-4 rounded bg-white shadow-sm">
                <div className="mb-3" style={{ fontSize: '32px' }}>✅</div>
                <h5 className="fw-bold mb-2">Quality Control</h5>
                <p className="text-muted mb-0">Systematic quality checks ensuring durability and consistency in every product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">How to Order</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="process-card text-center">
                <div className="process-number mb-4" style={{ fontSize: '48px', fontWeight: 'bold', color: '#0d6efd' }}>
                  1
                </div>
                <h5 className="fw-bold mb-3">Share Your Requirements</h5>
                <p className="text-muted">Tell us about your packaging needs, dimensions, and branding requirements.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card text-center">
                <div className="process-number mb-4" style={{ fontSize: '48px', fontWeight: 'bold', color: '#0d6efd' }}>
                  2
                </div>
                <h5 className="fw-bold mb-3">Get Quote & Samples</h5>
                <p className="text-muted">Receive competitive pricing and sample products for your review.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card text-center">
                <div className="process-number mb-4" style={{ fontSize: '48px', fontWeight: 'bold', color: '#0d6efd' }}>
                  3
                </div>
                <h5 className="fw-bold mb-3">On-Time Delivery</h5>
                <p className="text-muted">We manufacture and deliver your custom packaging on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow">
                <div className="card-body p-5 text-center">
                  <h3 className="fw-bold mb-4">Get In Touch</h3>
                  <div className="mb-4">
                    <h6 className="fw-bold text-primary mb-2">📍 Location</h6>
                    <p className="text-muted mb-0">
                      3/1, A.K. Mukherjee Road, Baranagar<br />
                      Kolkata – 700090, West Bengal, India
                    </p>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold text-primary mb-2">👤 Contact Person</h6>
                    <p className="text-muted mb-0">Mr. Biswajit Saha</p>
                  </div>
                  <button className="btn btn-primary btn-lg w-100">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
