import React, { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { FiCopy, FiCheck } from "react-icons/fi";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const emailAddress = "harishvardhanm24cs@psnacet.edu.in";
  const githubLink = "https://github.com/harishvardhanm24cs-glitch";
  const linkedinLink = "https://linkedin.com/in/harsh-vardhan2005";

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>
          Get In <span>Touch</span>
        </h2>

        <div className="contact-grid">
          {/* Left Column: Details & Copy Actions */}
          <div className="contact-details-box">
            <div className="contact-box-left">
              <h4>Contact Details</h4>

              {/* Email */}
              <div className="contact-item" data-cursor="disable">
                <span className="contact-item-icon">
                  <FaEnvelope />
                </span>
                <div className="contact-item-info">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${emailAddress}`} className="contact-link">
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(emailAddress, "email")}
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedText === "email" ? (
                    <FiCheck className="copied-icon" />
                  ) : (
                    <FiCopy />
                  )}
                  <span className="tooltip">
                    {copiedText === "email" ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              {/* LinkedIn */}
              <div className="contact-item" data-cursor="disable">
                <span className="contact-item-icon">
                  <FaLinkedinIn />
                </span>
                <div className="contact-item-info">
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    harsh-vardhan2005
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(linkedinLink, "linkedin")}
                  title="Copy LinkedIn profile link"
                  aria-label="Copy LinkedIn profile link"
                >
                  {copiedText === "linkedin" ? (
                    <FiCheck className="copied-icon" />
                  ) : (
                    <FiCopy />
                  )}
                  <span className="tooltip">
                    {copiedText === "linkedin" ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              {/* GitHub */}
              <div className="contact-item" data-cursor="disable">
                <span className="contact-item-icon">
                  <FaGithub />
                </span>
                <div className="contact-item-info">
                  <span className="contact-label">GitHub</span>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    harishvardhanm24cs-glitch
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(githubLink, "github")}
                  title="Copy GitHub profile link"
                  aria-label="Copy GitHub profile link"
                >
                  {copiedText === "github" ? (
                    <FiCheck className="copied-icon" />
                  ) : (
                    <FiCopy />
                  )}
                  <span className="tooltip">
                    {copiedText === "github" ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              <h4>Education</h4>
              <div className="education-box">
                <p className="education-degree">
                  B.E Computer Science and Engineering
                </p>
                <p className="education-college">
                  PSNA College of Engineering and Technology
                </p>
                <p className="education-location">
                  Dindigul, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="contact-social-row">
              <h4>Social Links</h4>
              <div className="social-links-flex">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  GitHub <MdArrowOutward />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  LinkedIn <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-box">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group" data-cursor="disable">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    id="form-name"
                  />
                  <label htmlFor="form-name">Name</label>
                  <span className="form-line"></span>
                </div>

                <div className="form-group" data-cursor="disable">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    id="form-email"
                  />
                  <label htmlFor="form-email">Email Address</label>
                  <span className="form-line"></span>
                </div>

                <div className="form-group" data-cursor="disable">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    id="form-message"
                    rows={5}
                  />
                  <label htmlFor="form-message">Message</label>
                  <span className="form-line"></span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                  data-cursor="disable"
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            ) : (
              <div className="success-message-box">
                <div className="success-icon-wrap">
                  <FiCheck className="success-icon" />
                </div>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. I will get back to
                  you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="reset-btn"
                  data-cursor="disable"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer/Credits Row */}
        <div className="contact-footer">
          <div className="footer-credits">
            <h2>
              Designed and Developed <br /> by <span>Harsh Vardhan</span>
            </h2>
          </div>
          <div className="footer-copyright">
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
