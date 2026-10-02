import { team } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="team" className="section section-tint" aria-labelledby="team-title">
      <div className="wrap">
        <p className="eyebrow mono">The team</p>
        <h2 id="team-title" className="h2">Senior engineers, <em>working with you.</em></h2>
        <div className="grid-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <article className="card team-card">
                <span className="avatar" aria-hidden="true">{m.name.slice(0, 1)}</span>
                <h3>{m.name}</h3>
                <p className="mono card-eyebrow">{m.role}</p>
                <p className="muted">{m.bio}</p>
                <ul className="chips">{m.focus.map((f) => <li key={f}>{f}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
