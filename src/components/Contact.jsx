import { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully. We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section className="contact-section">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="contact-header">
          <h2 className="section-heading2">Contact Us</h2>
          <p className="section-subheading2">
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* FORM SIDE */}
          <div className="contact-form-wrapper" id="contact">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  name="firstName"
                  placeholder="First Name*"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Budget */}
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Estimated Project Budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $20k</option>
                <option>$25k - $40k</option>
                <option>$40k+</option>
              </select>

              {/* Services */}
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Services Needed?*</option>
                <option>Residential Remodeling</option>
                <option>Commercial Construction</option>
                <option>Custom Home Building</option>
                <option>Kitchen Remodeling</option>
                <option>Bathroom Remodeling</option>
                <option>Home Additions</option>
                <option>Outdoor Kitchens</option>
                <option>Outdoor Living Spaces</option>
                <option>Flooring Installations</option>
                <option>Patio Installations</option>
                <option>Survey</option>
                <option>Painting</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="contact-btn">
                Send Message
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
          {/* RIGHT INFO CARD */}
          <div className="contact-info-card">
            <h3>Apexconstruct</h3>

            <p>
              275 Summer Street
              <br />
              Boston, MA 02210
              <br />
              United States
            </p>

            <div className="info-block">
              <strong>Phone</strong>
              <p>+1 (915) 294 9278</p>
            </div>

            <div className="info-block">
              <strong>Email</strong>
              <p>leroysmith@apexconstruct.com</p>
            </div>

            <div className="info-block">
              <strong>Business Hours</strong>
              <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 2:00 PM</p>
            </div>

            <div className="info-block">
              <strong>Licensed & Insured</strong>
              <p>Massachusetts Contractor License #MA-48291</p>
            </div>
          </div>
        </div>
        {/* MAP */}
        <div className="contact-map">
          <MapContainer
            center={[42.3532, -71.0515]}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[42.3532, -71.0515]}>
              <Popup>Apexconstruct HQ</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
