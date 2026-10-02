"use client";
import { useState } from "react";

const crowdedLinks = ["Home", "About Us", "Products", "Solutions", "Pricing", "Blog", "Careers", "Contact", "Login", "Sign up"];

function Before() {
  return (
    <div className="pg pg-before" aria-hidden="true">
      <div className="b-promo">★ BIG SALE ★ 50% OFF EVERYTHING — ENDS TONIGHT!!! CLICK HERE ★</div>
      <div className="b-nav">
        <span className="b-logo">YOURCOMPANY</span>
        {crowdedLinks.map((l) => <span key={l}>{l}</span>)}
      </div>
      <div className="b-body">
        <div className="b-main">
          <p className="b-h">Welcome to our website we offer solutions, services, products and much more for all your business needs</p>
          <p className="b-p">Lorem ipsum dolor sit amet, we are leading provider of innovative synergy. Our team of experts delivers best-in-class results. Read more below, or scroll, or click anywhere.</p>
          <div className="b-btns"><span className="b1">Buy now</span><span className="b2">Learn more</span><span className="b3">Get a quote</span><span className="b4">Download PDF</span></div>
          <div className="b-grid">
            {["Service one", "Service two", "Service three", "Service four", "Service five", "Service six"].map((t) => (
              <div key={t}><b>{t}</b><i>Click to read more about this</i></div>
            ))}
          </div>
        </div>
        <aside className="b-side">
          <div className="b-ad">NEWSLETTER!<br />Subscribe today</div>
          <div className="b-ad b-ad2">Chat with us</div>
          <div className="b-ad b-ad3">Follow us</div>
        </aside>
      </div>
      <div className="b-foot">
        <p className="b-ticker">» New! Updated! Award winning! Trusted by thousands! Call now: 555-0199 «</p>
        <p>Privacy | Terms | Sitemap | Partners | FAQ | Press | Affiliates | Support | Cookie settings | © YourCompany 2009 | Visitors: 000123</p>
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="pg pg-after" aria-hidden="true">
      <div className="a-nav">
        <span className="a-logo"><i />Northwind</span>
        <span className="a-links"><span>Product</span><span>Pricing</span><span>Customers</span></span>
        <span className="a-cta">Start free</span>
      </div>
      <div className="a-hero">
        <div>
          <p className="a-eyebrow">Project management, simplified</p>
          <p className="a-h">Plan, track and ship work <em>without the noise.</em></p>
          <p className="a-p">One calm workspace for your team&apos;s tasks, docs and deadlines.</p>
          <div className="a-btns"><span className="a-primary">Start free</span><span className="a-ghost">Watch demo →</span></div>
        </div>
        <div className="a-card">
          <div className="a-card-top"><span>This week</span><b>+24%</b></div>
          <div className="a-bars">{[38, 55, 44, 70, 62, 88, 76].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
          <div className="a-card-foot"><span>Tasks done</span><b>128</b></div>
        </div>
      </div>
      <div className="a-feats">
        {[["Plan", "Roadmaps your whole team can follow."], ["Track", "Live progress without status meetings."], ["Ship", "Release with confidence, every sprint."]].map(([t, d]) => (
          <div key={t}><span className="a-ico" /><b>{t}</b><p>{d}</p></div>
        ))}
      </div>
    </div>
  );
}

export function DesignCompare() {
  const [pos, setPos] = useState(50);
  return (
    <section className="section section-tint" aria-labelledby="design-title">
      <div className="wrap">
        <p className="eyebrow mono">Design</p>
        <h2 id="design-title" className="h2">Clutter in. <em>Clarity out.</em></h2>
        <p className="lead">Drag the handle to compare a typical crowded landing page with the same content after a redesign: one message, one action, clear hierarchy.</p>
        <div className="cmp">
          <div className="cmp-layer"><After /></div>
          <div className="cmp-layer" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><Before /></div>
          <div className="cmp-handle" style={{ left: `${pos}%` }} aria-hidden="true"><span>⇄</span></div>
          <span className="cmp-tag mono l">Before</span>
          <span className="cmp-tag mono r">After</span>
          <input className="cmp-range" type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Compare the before and after redesign" />
        </div>
        <ul className="cmp-notes">
          <li><b>Before</b> Ten nav links, four competing buttons, banners and ads.</li>
          <li><b>After</b> One headline, one primary action and proof at a glance.</li>
        </ul>
      </div>
    </section>
  );
}
