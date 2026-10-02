import { processSteps } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="wrap">
        <p className="eyebrow mono">How we work</p>
        <h2 id="process-title" className="h2">Built with your team. <em>Tested before release.</em></h2>
        <ol className="timeline">
          {processSteps.map((s, i) => (
            <Reveal key={s.phase} delay={i * 0.05}>
              <li className="step">
                <span className="mono step-no">{s.phase}</span>
                <div><h3>{s.title}</h3><p className="muted">{s.text}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
