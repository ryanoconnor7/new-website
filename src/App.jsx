const currentExperience = [
  {
    title: "MTA TrainTime",
    role: "Product & Technical Lead",
    detail:
      "Leading product, fare payment, and technical strategy + implementation for MTA TrainTime, a high-traffic app for tickets, trip planning, and real-time information across LIRR and Metro-North.",
    stats: "350K+ daily active users • 1.9M+ monthly active users • 4.9 ★ across 300K+ ratings",
    dateRange: "2019-Present",
    href: "https://apps.apple.com/us/app/mta-traintime/id1104885987"
  },
  {
    title: "Clubspot",
    role: "Forward Deployed Engineer (Part-time)",
    detail:
      "Delivering white-labeled, cross-platform mobile experiences for social clubs.",
    dateRange: "2023-Present",
    href: "https://theclubspot.com"
  }
];

const pastExperience = [
  {
    title: "MTA TrainTime",
    role: "App Designer & Developer",
    detail:
      "Led consolidation of three legacy commuter applications into a unified hybrid React Native + native platform.",
    dateRange: "2019-2023",
    href: "https://www.mta.info/press-release/mta-launches-new-one-stop-rail-app-combining-lirr-and-metro-north-trip-planning-and"
  },
  {
    title: "Apple",
    role: "Software Engineer Intern",
    detail: "Developed framework and interface components supporting Siri and Siri Shortcuts.",
    dateRange: "2020"
  },
  {
    title: "University of Michigan",
    role: "B.S. Computer Science, Spanish Minor",
  }
];

export default function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="map-grid" />
        <div className="map-lines">
          <span className="line l1" />
          <span className="line l2" />
          <span className="line l3" />
          <span className="line l4" />
          <span className="line l5" />
        </div>
        <div className="map-stations">
          <span className="station s1" />
          <span className="station s2" />
          <span className="station s3" />
          <span className="station s4" />
          <span className="station s5" />
          <span className="station s6" />
        </div>
      </div>

      <main className="page">
        <header className="hero">
          <h1>Ryan O'Connor</h1>
          <h2>Building mobile + digital experiences</h2>
          <h3 style={{ marginTop: '0.5rem' }} className="kicker">New York, NY</h3>
        </header>

        <section className="panel">
          <h3>Current</h3>
          <div className="experience-grid">
            {currentExperience.map((item) =>
              item.href ? (
                <a
                  key={`${item.title}-${item.role}`}
                  className="experience-card is-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.cta ? `${item.title} - ${item.cta}` : `${item.title} - External link`}
                >
                  <div className="card-top">
                    <p className="label">{item.title}</p>
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="role">{item.role}</p>
                  {item.stats ? <p className="card-stats">{item.stats}</p> : null}
                  <p className="detail">{item.detail}</p>
                  {item.cta ? <p className="card-cta">{item.cta}</p> : null}
                  {item.dateRange ? <p className="card-date">{item.dateRange}</p> : null}
                </a>
              ) : (
                <article key={`${item.title}-${item.role}`} className="experience-card">
                  <p className="label">{item.title}</p>
                  <p className="role">{item.role}</p>
                  {item.stats ? <p className="card-stats">{item.stats}</p> : null}
                  <p className="detail">{item.detail}</p>
                  {item.dateRange ? <p className="card-date">{item.dateRange}</p> : null}
                </article>
              )
            )}
          </div>
        </section>

        <section className="panel">
          <h3>Past</h3>
          <div className="experience-grid">
            {pastExperience.map((item) =>
              item.href ? (
                <a
                  key={`${item.title}-${item.role}`}
                  className="experience-card is-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.cta ? `${item.title} - ${item.cta}` : `${item.title} - External link`}
                >
                  <div className="card-top">
                    <p className="label">{item.title}</p>
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="role">{item.role}</p>
                  {item.stats ? <p className="card-stats">{item.stats}</p> : null}
                  <p className="detail">{item.detail}</p>
                  {item.cta ? <p className="card-cta">{item.cta}</p> : null}
                  {item.dateRange ? <p className="card-date">{item.dateRange}</p> : null}
                </a>
              ) : (
                <article key={`${item.title}-${item.role}`} className="experience-card">
                  <p className="label">{item.title}</p>
                  <p className="role">{item.role}</p>
                  {item.stats ? <p className="card-stats">{item.stats}</p> : null}
                  <p className="detail">{item.detail}</p>
                  {item.dateRange ? <p className="card-date">{item.dateRange}</p> : null}
                </article>
              )
            )}
          </div>
        </section>

        <footer className="footer">
          <a className="icon-link" href="mailto:inbound@ryanoconnor.dev" aria-label="Email Ryan">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm0 1.8v.15l8 5.2 8-5.2V8.3l-8 5.2-8-5.2Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/rmoc/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.5 8.3A1.8 1.8 0 1 1 6.5 4.7a1.8 1.8 0 0 1 0 3.6ZM4.9 9.8h3.2V19H4.9V9.8Zm5.1 0h3.1v1.3h.05c.43-.8 1.5-1.65 3.09-1.65 3.3 0 3.9 2.16 3.9 4.96V19h-3.2v-4.06c0-.97-.02-2.21-1.35-2.21-1.35 0-1.56 1.05-1.56 2.14V19H10V9.8Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </footer>
      </main>
    </>
  );
}
