import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <div className="page"><div className="wrap narrow">
      <p className="eyebrow mono">404</p>
      <h1 className="h1">This page <em>doesn&apos;t exist.</em></h1>
      <p className="lead">The link may be broken or the page may have moved.</p>
      <Link href="/" className="btn btn-dark">Back to home</Link>
    </div></div>
  );
}
