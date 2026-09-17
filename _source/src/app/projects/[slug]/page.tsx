import Link from "next/link";
import { notFound } from "next/navigation";
import workDataRaw from "../../../../public/data/work-data.json";

type Project = {
  image: string;
  imageFit?: "cover" | "contain";
  secondImage?: string;
  title: string;
  client: string;
  slug: string;
  description: string;
  featured?: boolean;
  draft?: boolean;
  problem?: string[];
  solution?: string[];
  howItWorks?: string[];
  result?: string[];
  highlights: string[];
};

const workData = workDataRaw.workData as Project[];
const livePages = workData.filter((p) => !p.draft);

export async function generateStaticParams() {
  return livePages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = livePages.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Hamed Nouri`,
    description: project.description,
  };
}

// Renders **bold** lead-ins (e.g. "**Example:** ...") without pulling in a
// full markdown parser for what is otherwise plain text.
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ParagraphBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-lg text-secondary leading-relaxed">
          {renderInline(p)}
        </p>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = livePages.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Nav -- pt-28/md:pt-36 clears the absolutely-positioned global Header
          (Download PDF Resume), which otherwise overlaps this bar and
          intercepts clicks meant for "Back to portfolio". */}
      <nav className="pt-28 md:pt-36 pb-6 px-6 md:px-12 border-b border-gray-100 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">H</Link>
        <Link
          href="/"
          className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            {project.client}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          {project.title}
        </h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </section>

      {/* Banner image */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16">
        <div className={`rounded-2xl overflow-hidden ${project.imageFit === "contain" ? "bg-black" : "bg-softGray"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-72 md:h-96 ${project.imageFit === "contain" ? "object-contain" : "object-cover"}`}
          />
        </div>
      </section>

      {/* Problem / Solution / How it works / Result */}
      {(project.problem || project.solution || project.howItWorks || project.result) && (
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16 flex flex-col gap-14">
          {project.problem && (
            <div>
              <h2 className="text-2xl font-bold mb-6">The Problem</h2>
              <ParagraphBlock paragraphs={project.problem} />
            </div>
          )}
          {project.solution && (
            <div>
              <h2 className="text-2xl font-bold mb-6">The Solution</h2>
              <ParagraphBlock paragraphs={project.solution} />
            </div>
          )}
          {project.howItWorks && (
            <div>
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <ParagraphBlock paragraphs={project.howItWorks} />
            </div>
          )}
          {project.result && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Result</h2>
              <ParagraphBlock paragraphs={project.result} />
            </div>
          )}
        </section>
      )}

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-black">Highlights</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-softGray rounded-xl px-6 py-5"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Second image */}
      {project.secondImage && (
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden bg-softGray">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.secondImage}
              alt={`${project.title} — additional screenshot`}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pb-24 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Link
          href="/"
          className="py-4 px-8 border border-primary rounded-full text-base font-medium hover:bg-primary hover:text-white transition-colors"
        >
          View all projects
        </Link>
        <a
          href="mailto:ai@hamednouri.com"
          className="py-4 px-8 bg-primary text-white rounded-full text-base font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
