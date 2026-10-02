"use client";
import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry: ${f.get("service")}`);
    const body = encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow mono">Contact</p>
          <h2 id="contact-title" className="h2">Tell us what you want <em>to build.</em></h2>
          <p className="lead">Share a few lines about your project. We reply within 24 hours with next steps.</p>
          <a className="mail-link" href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <label>Your name<input name="name" required autoComplete="name" placeholder="Jane Doe" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" /></label>
          <label>What do you need?
            <select name="service" defaultValue={services[0].title}>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              <option>Something else</option>
            </select>
          </label>
          <label>Project details<textarea name="message" rows={4} required placeholder="We're looking to build…" /></label>
          <button type="submit" className="btn btn-dark"><Send size={15} /> Send message</button>
          {sent && <p className="muted" role="status">Your email app opened with the details. We&apos;ll reply within 24 hours.</p>}
        </form>
      </div>
    </section>
  );
}
