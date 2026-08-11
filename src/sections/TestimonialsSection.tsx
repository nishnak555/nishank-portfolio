import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go, paused]);

  return (
    <section id="testimonials" className="section" style={{ background: "var(--gradient-testimonials)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say about "
          highlight="working with me"
          subtitle="Don't just take my word for it — here's what people I've worked with have to say."
        />

        <div
          className="testimonials-wrap mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-cards-row">
            {testimonials.map((t, i) => {
              const offset = (i - current + testimonials.length) % testimonials.length;
              const isActive = offset === 0;
              const isAdjacent = offset === 1 || offset === testimonials.length - 1;
              if (!isActive && !isAdjacent) return null;

              return (
                <motion.div
                  key={t.name}
                  className={`testimonial-card ${isActive ? "testimonial-card--active" : "testimonial-card--dim"}`}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : 12,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => !isActive && go(offset <= testimonials.length / 2 ? 1 : -1)}
                >
                  <Quote size={32} className="testimonial-card__quote-icon" />
                  <p className="testimonial-card__text">"{t.quote}"</p>
                  <div className="testimonial-card__stars">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <div className="testimonial-card__author">
                    <div className="author-avatar" style={{ background: t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <strong className="author-name">{t.name}</strong>
                      <span className="author-role">{t.role}, {t.company}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="testimonial-controls">
            <motion.button
              type="button"
              className="testimonial-btn"
              onClick={() => go(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  className={`testimonial-dot ${i === current ? "testimonial-dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                  animate={{ scale: i === current ? 1.3 : 1 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              className="testimonial-btn"
              onClick={() => go(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
