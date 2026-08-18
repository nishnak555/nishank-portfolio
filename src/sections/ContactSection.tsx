import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Download, Send, CheckCircle } from "lucide-react";
import { contactMethods, contactFormFields } from "@/data";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  mail: Mail,
  download: Download,
};

export function ContactSection() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--gradient-contact)" }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <SectionHeader
              eyebrow="Let's Work Together"
              title="Let's build something "
              highlight="amazing"
              subtitle="Have a project in mind? I'd love to hear about it. Let's discuss how I can help turn your idea into reality."
            />

            <StaggerContainer className="contact-methods mt-10" stagger={0.08}>
              {contactMethods.map((method) => {
                const Icon = iconMap[method.icon] ?? Mail;
                return (
                  <StaggerItem key={method.label}>
                    <motion.a
                      href={method.href}
                      className="contact-method"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="contact-method__icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <strong className="contact-method__label">{method.label}</strong>
                        <span className="contact-method__desc">{method.description}</span>
                        <span className="contact-method__value">{method.value}</span>
                      </div>
                    </motion.a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Reveal delay={0.4} className="contact-cta-banner mt-10">
              <div className="cta-banner">
                <div>
                  <p className="cta-banner__title">Let's build something <span className="text-gradient">amazing</span> together</p>
                  <p className="cta-banner__sub">Have a project in mind? Let's discuss how I can help turn your idea into a successful product.</p>
                </div>
                <div className="cta-banner__actions">
                  <MagneticButton href="mailto:pathaknishank007@gmail.com" className="btn-primary">
                    <Mail size={15} />
                    Send Email
                  </MagneticButton>
                  <MagneticButton href="/resume.pdf" className="btn-ghost">
                    <Download size={15} />
                    Download CV
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="contact-form-wrap" delay={0.15} direction="right">
            <div className="contact-form-card">
              <h3 className="contact-form-card__title">Send a Message</h3>
              <p className="contact-form-card__sub">I'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={40} className="form-success__icon" />
                  <h4>Message sent!</h4>
                  <p>Thanks for reaching out. I'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="contact-form mt-6" onSubmit={handleSubmit}>
                  {contactFormFields.map((field) => (
                    <div
                      key={field.name}
                      className={`form-field ${focused === field.name ? "form-field--focused" : ""}`}
                    >
                      <label className="form-label" htmlFor={field.name}>
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="form-input form-input--textarea"
                          rows={4}
                          value={form[field.name] ?? ""}
                          onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      ) : field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          className="form-input form-input--select"
                          value={form[field.name] ?? ""}
                          onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="">Select budget range</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="form-input"
                          value={form[field.name] ?? ""}
                          onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      )}
                    </div>
                  ))}

                  <MagneticButton type="submit" className="btn-primary w-full mt-2 justify-center">
                    <Send size={15} />
                    Send Message
                  </MagneticButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
