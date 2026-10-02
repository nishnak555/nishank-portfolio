"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Code2, FileText, Globe, Headphones, Mail, MessageSquare, Rocket, ShoppingBag, TrendingUp, User, Database, Workflow as WorkflowIcon, Landmark } from "lucide-react";
import { sceneGroups, type Scene } from "@/lib/content";

const ICONS = { headset: Headphones, trending: TrendingUp, file: FileText, cart: ShoppingBag, code: Code2, rocket: Rocket, workflow: WorkflowIcon, bank: Landmark };
const TOOL = { mail: Mail, db: Database, chat: MessageSquare, file: FileText, cart: ShoppingBag, globe: Globe };

function SceneCard({ s, step }: { s: Scene; step: number }) {
  const HandIcon = TOOL[s.handoff.icon];
  return (
    <div className="scene" role="tabpanel" id="scene-panel" aria-live="polite">
      <div className="scene-top"><span><i className="dotg" />{s.tag}</span><span className="mono">{s.code}</span></div>
      <p className="scene-title">{s.title}</p>

      <div className="nodes">
        {s.sources.map((n) => { const I = TOOL[n.icon]; return (
          <div key={n.name} className={`node ${step === 0 ? "lit" : ""}`}>
            <span className="node-ico"><I size={18} aria-hidden="true" /></span>
            <span><b>{n.name}</b><small>{n.note}</small></span>
          </div>); })}
      </div>
      <div className="link" aria-hidden="true" />

      <div className={`center ${step === 1 ? "lit" : ""}`}>
        <div className="center-top"><b><i />MindForgeAi</b><span>{s.centerMeta}</span></div>
        <h3>{s.centerTitle}</h3>
        <div className="pass"><span className="g">{s.pass.glyph}</span><span><small>{s.pass.label}</small><b>{s.pass.name}</b></span><ArrowUpRight className="end" size={20} aria-hidden="true" /></div>
        <div className="checks3">{s.checks.map((c) => <span key={c}>{c}</span>)}</div>
      </div>

      <div className="link flip" aria-hidden="true" />
      <div className="nodes two">
        <div className={`node node-human ${step === 2 ? "lit" : ""}`}>
          <span className="node-ico"><User size={18} aria-hidden="true" /></span>
          <span><small>{s.review.label}</small><b>{s.review.name}</b></span><i className="end" />
        </div>
        <div className={`node ${step === 3 ? "lit" : ""}`}>
          <span className="node-ico"><HandIcon size={18} aria-hidden="true" /></span>
          <span><small>{s.handoff.label}</small><b>{s.handoff.name}</b></span><ArrowUpRight className="end" size={16} aria-hidden="true" />
        </div>
      </div>

      <div className="scene-foot">
        <span className="num">{String(step + 1).padStart(2, "0")}<small>/04</small></span>
        <div><b>{s.steps[step].t}</b><p>{s.steps[step].d}</p></div>
      </div>
      <div className="scene-meta"><span>Example tools. Designed around your stack.</span><Link href="/#contact">Explore any step <ArrowUpRight size={12} style={{ display: "inline" }} aria-hidden="true" /></Link></div>
    </div>
  );
}

export function Workflows() {
  const [group, setGroup] = useState(0);
  const [sel, setSel] = useState(0);
  const [step, setStep] = useState(1);
  const g = sceneGroups[group];
  const scene = g.scenes[sel] ?? g.scenes[0];

  useEffect(() => {
    const t = setInterval(() => setStep((v) => (v + 1) % 4), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="workflow" className="section wash" aria-labelledby="workflow-title">
      <div className="wrap">
        <div className="split-head">
          <h2 id="workflow-title" className="h2">See how<br />the work moves.</h2>
          <p className="lead">Follow a request through the tools and people involved. Pick an industry or role to inspect the steps and decisions.</p>
        </div>

        <div className="iw">
          <div>
            <div className="iw-tabs" role="tablist" aria-label="Browse by">
              {sceneGroups.map((x, i) => (
                <button key={x.id} role="tab" type="button" aria-selected={i === group} onClick={() => { setGroup(i); setSel(0); }}>{x.label}</button>
              ))}
            </div>
            <div className="iw-list" role="tablist" aria-label={g.label} aria-orientation="vertical">
              {g.scenes.map((sc, i) => { const I = ICONS[sc.icon] ?? Briefcase; return (
                <button key={sc.id} role="tab" type="button" aria-selected={i === sel} aria-controls="scene-panel" onClick={() => { setSel(i); setStep(0); }}>
                  <I size={18} aria-hidden="true" /> {sc.label} <ArrowUpRight className="arrow" size={14} aria-hidden="true" />
                </button>); })}
            </div>
            <p className="iw-note">Don&apos;t see your business here?<br /><Link href="/#contact">Tell us what you&apos;re working on <ArrowUpRight size={12} aria-hidden="true" /></Link></p>
          </div>
          <div>
            <SceneCard s={scene} step={step} />
            <p className="mono card-eyebrow" style={{ marginTop: "1.2rem" }}>{scene.tag}</p>
            <p className="muted" style={{ margin: ".3rem 0 0", fontSize: "1.3rem" }}>{scene.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
