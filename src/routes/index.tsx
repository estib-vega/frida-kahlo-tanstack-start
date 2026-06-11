import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="kicker">Mexican painter, 1907-1954</p>
          <h1 id="page-title">Frida Kahlo</h1>
          <p className="intro">
            Frida Kahlo turned private pain, family history, politics, and
            Mexican visual culture into paintings that still feel immediate.
            Her self-portraits made identity itself the subject.
          </p>
        </div>

        <figure className="portrait-card">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Frida%20Kahlo%2C%20by%20Guillermo%20Kahlo.jpg"
            alt="Black and white portrait of Frida Kahlo by Guillermo Kahlo"
          />
          <figcaption>Portrait by Guillermo Kahlo, 1932.</figcaption>
        </figure>
      </section>

      <section className="content-grid" aria-label="Frida Kahlo information">
        <article>
          <span className="section-number">01</span>
          <h2>Why She Matters</h2>
          <p>
            Kahlo is best known for direct, vividly colored self-portraits about
            identity, the body, love, illness, and death. She resisted being
            treated as only Diego Rivera's wife and built a visual language that
            made her own body and biography central.
          </p>
        </article>

        <article>
          <span className="section-number">02</span>
          <h2>Importance For Mexico</h2>
          <p>
            Her art drew from Mexican popular culture, folk objects, Indigenous
            dress, pre-Hispanic symbols, and post-revolutionary ideas about
            national identity. La Casa Azul in Coyoacan, now the Frida Kahlo
            Museum, preserves that world as a cultural landmark.
          </p>
        </article>

        <article>
          <span className="section-number">03</span>
          <h2>German Roots</h2>
          <p>
            Frida's father was Guillermo Kahlo, born Carl Wilhelm Kahlo in
            Germany. He immigrated to Mexico in 1891, became a photographer,
            and photographed Frida throughout her youth, shaping how she
            understood portraiture and presentation.
          </p>
        </article>
      </section>

      <aside className="fact-strip" aria-label="Quick facts">
        <p>
          Born in Coyoacan. Painted herself often. Claimed Mexican culture as a
          living language, not a costume.
        </p>
      </aside>
    </main>
  )
}
