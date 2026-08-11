import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { projects } from "@/data";
import type { ProjectCategory, ProjectItem } from "@/types";

// ─── Category config ──────────────────────────────────────────────────────────
const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All",     value: "all"    },
  { label: "Web",     value: "web"    },
  { label: "Mobile",  value: "mobile" },
  { label: "API",     value: "api"    },
  { label: "SaaS",    value: "saas"   },
];

const CATEGORY_LABELS: Record<string, string> = {
  web:    "WEB APPLICATION",
  mobile: "MOBILE APPLICATION",
  api:    "API ARCHITECTURE",
  saas:   "SAAS PLATFORM",
};

// Extract accent color from gradient string
function accentFromGradient(g: string): string {
  const match = g.match(/#([0-9a-f]{3,8})/gi);
  return match?.[0] ?? "#4f6bff";
}

// ─── 3D Tilt card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });

  const rotX  = useTransform(sy, [0, 1], [5, -5]);
  const rotY  = useTransform(sx, [0, 1], [-5, 5]);
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }, [mx, my]);

  const onLeave = useCallback(() => { mx.set(0.5); my.set(0.5); }, [mx, my]);

  const accent     = accentFromGradient(project.gradient);
  const eyebrow    = CATEGORY_LABELS[project.category[0]] ?? "FEATURED WORK";
  const hasAppLink = !!(project.playStoreUrl ?? project.appStoreUrl);
  const link       = project.liveUrl ?? project.playStoreUrl ?? project.appStoreUrl ?? "#contact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        className="pcard"
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d", borderTopColor: `${accent}60` }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover="hover"
        initial="rest"
      >
        {/* Inner spotlight that follows cursor */}
        <motion.div
          className="pcard-spotlight"
          style={{
            background: `radial-gradient(360px circle at ${glowX} ${glowY}, ${accent}18, transparent 55%)`,
          }}
        />

        {/* Border glow on hover */}
        <motion.div
          className="pcard-border-glow"
          style={{ boxShadow: `0 0 0 1px ${accent}60` }}
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
        />

        {/* Top row: icon + arrow */}
        <div className="pcard-top">
          <div
            className="pcard-icon"
            style={{ background: project.gradient }}
          >
            <Layers size={18} color="white" />
          </div>

          <motion.a
            href={link}
            target={link !== "#contact" ? "_blank" : undefined}
            rel={link !== "#contact" ? "noopener noreferrer" : undefined}
            className="pcard-arrow"
            variants={{
              rest:  { x: 0,  y: 0,  scale: 1 },
              hover: { x: 3, y: -3, scale: 1.08 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Category eyebrow */}
        <span className="pcard-eyebrow">{eyebrow}</span>

        {/* Title */}
        <h3 className="pcard-title">{project.title}</h3>

        {/* Description */}
        <p className="pcard-desc">{project.description}</p>

        {/* Metrics row */}
        {project.metrics && (
          <div className="pcard-metrics">
            {project.metrics.slice(0, 2).map((m) => (
              <span key={m} className="pcard-metric" style={{ color: accent }}>{m}</span>
            ))}
          </div>
        )}

        {/* Tech badges */}
        <div className="pcard-badges">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="pbadge">{t.toUpperCase()}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="pbadge pbadge--more">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Status indicator */}
        <div className="pcard-status">
          <span
            className="pcard-status-dot"
            style={{ background: project.status === "live" ? "#22c55e" : project.status === "published" ? accent : "#f59e0b" }}
          />
          <span className="pcard-status-text">
            {project.status === "live" ? "Live" : project.status === "published" ? "Published" : "In Development"}
          </span>
          {hasAppLink && <span className="pcard-platform">App Store</span>}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(filter as ProjectCategory));

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="proj-section">
      <div className="container">

        {/* Header */}
        <div className="proj-header">
          <motion.span
            className="proj-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Work
          </motion.span>

          <div className="proj-header-row">
            <motion.h2
              className="proj-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              Selected projects that{" "}
              <span className="text-gradient">drive results</span>
            </motion.h2>

            <motion.a
              href="#contact"
              className="proj-view-all"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 4 }}
            >
              View all <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>

        {/* Filters */}
        <motion.div
          className="proj-filters"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {FILTERS.map((f) => {
            const count = f.value === "all"
              ? projects.length
              : projects.filter((p) => p.category.includes(f.value as ProjectCategory)).length;
            return (
              <button
                key={f.value}
                type="button"
                className={`proj-filter ${filter === f.value ? "proj-filter--active" : ""}`}
                onClick={() => { setFilter(f.value); setShowAll(false); }}
              >
                {f.label}
                <span className="proj-filter-count">{count}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="proj-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {filtered.length > 6 && (
          <motion.div
            className="proj-load-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="button"
              className="proj-load-btn"
              onClick={() => setShowAll((s) => !s)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? "Show Less" : `Load ${filtered.length - 6} More`}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
