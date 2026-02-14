import img1 from '../asset/img/img-1.jpeg';
import img2 from '../asset/img/img-2.jpeg';
import img3 from '../asset/img/img-3.jpeg';
import img4 from '../asset/img/img-4.jpeg';
import img5 from '../asset/img/img-5.jpeg';

export default function Home() {
  return (
    <div className="flex-grow-1">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Welcome to Royal Packaging</h1>
          <p className="lead mb-4">
            Established in 2009, Royal Packaging is a trusted manufacturer of corrugated packaging solutions based in Kolkata, West Bengal. We specialize in manufacturing Plain Corrugated Boxes, Printed Corrugated Boxes, and Corrugated Paper Rolls, catering to diverse industrial and commercial packaging needs.
          </p>
          <p className="mb-4">
            With a strong manufacturing setup, skilled workforce, and a commitment to quality, we ensure durable packaging solutions that meet customer specifications and delivery timelines.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary">✔ Customized Packaging</h5>
              <p className="text-muted">Tailored solutions as per your specifications and requirements.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-primary">✔ Quality Assured</h5>
              <p className="text-muted">Consistent quality checks to ensure durability and reliability.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-primary">✔ On-Time Delivery</h5>
              <p className="text-muted">Reliable and timely dispatch of finished goods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">About Royal Packaging</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead mb-4">
                Royal Packaging was founded in 2009 with the objective of delivering reliable and cost-effective corrugated packaging solutions. Operating from Kolkata (West Bengal, India), we have grown into a well-established manufacturer serving a wide customer base.
              </p>
              <p className="mb-4">
                Under the leadership of Mr. Biswajit Saha (Proprietor), the company has consistently focused on quality manufacturing, customer satisfaction, and operational efficiency. Our well-furnished infrastructural unit and experienced team enable us to handle customized and bulk requirements efficiently.
              </p>
              
              <h5 className="fw-bold mb-3">Basic Information</h5>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><strong>Nature of Business:</strong> Manufacturer</li>
                <li className="mb-2"><strong>Legal Status:</strong> Proprietorship</li>
                <li className="mb-2"><strong>Total Employees:</strong> More than 20 People</li>
                <li className="mb-2"><strong>Capacity:</strong> 20 Tons/Day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Products & Services</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h5 className="fw-bold text-primary mb-3">📦 Our Products</h5>
              <p>We manufacture a wide range of corrugated packaging products including:</p>
              <ul className="list-unstyled">
                <li className="mb-2">• Plain Corrugated Boxes</li>
                <li className="mb-2">• Printed Corrugated Boxes</li>
                <li className="mb-2">• Corrugated Paper Rolls</li>
              </ul>
              <p className="text-muted mt-3">Our products are known for strength, durability, and customization flexibility.</p>
            </div>
            <div className="col-lg-6 mb-4">
              <h5 className="fw-bold text-primary mb-3">🔧 Our Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">• Corrugated Box Printing Service</li>
                <li className="mb-2">• Customized Packaging Solutions</li>
                <li className="mb-2">• Supply of Paper Reel</li>
                <li className="mb-2">• Box Printing</li>
              </ul>
              <p className="text-muted mt-3">We offer packaging solutions tailored to product size, weight, and branding requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose Royal Packaging?</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Superior quality products</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Experienced professionals</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Excellent quality control team</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Well-furnished infrastructural unit</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Wide distribution network</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Ethical business policies</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ Transparent dealings</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded">
                    <p className="mb-0">⭐ On-time delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Carousel Section */}
      <section id="gallery" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">🏭 Our Manufacturing Facility</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                  <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2"></button>
                  <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3"></button>
                  <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="4"></button>
                </div>
                <div className="carousel-inner rounded shadow">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      alt="Manufacturing Facility"
                      className="d-block w-100"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                      <h5>Production Unit</h5>
                      <p>State-of-the-art manufacturing equipment</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      alt="Packaging Materials"
                      className="d-block w-100"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                      <h5>Quality Materials</h5>
                      <p>Premium corrugated paper and packaging materials</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      alt="Quality Control"
                      className="d-block w-100"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                      <h5>Quality Assurance</h5>
                      <p>Rigorous testing and quality control procedures</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      alt="Printing Services"
                      className="d-block w-100"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                      <h5>Printing Services</h5>
                      <p>Advanced printing capabilities for custom designs</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img5}
                      alt="Finished Products"
                      className="d-block w-100"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                      <h5>Finished Products</h5>
                      <p>Ready for dispatch to customers worldwide</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">📞 Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-4">Royal Packaging</h5>
                  <p className="card-text">
                    <strong>Address:</strong><br />
                    3/1, A.K. Mukherjee Road<br />
                    Baranagar, Kolkata – 700090<br />
                    West Bengal, India
                  </p>
                  <hr />
                  <p className="card-text">
                    <strong>Contact Person:</strong><br />
                    Mr. Biswajit Saha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
