import { createFileRoute } from '@tanstack/react-router'

type Painting = {
  title: string
  year: string
  location: string
  note: string
  theme: 'green' | 'red' | 'gold' | 'blue' | 'rose'
}

const paintings: Array<Painting> = [
  {
    title: 'The Two Fridas',
    year: '1939',
    location: 'Museo de Arte Moderno, Mexico City',
    note: 'A double self-portrait often read through heartbreak, divided identity, and Kahlo\'s European and Mexican inheritance.',
    theme: 'green',
  },
  {
    title: 'Henry Ford Hospital',
    year: '1932',
    location: 'Museo Dolores Olmedo, Mexico City',
    note: 'Painted after her miscarriage in Detroit, it turns private reproductive grief into one of her most direct visual statements.',
    theme: 'red',
  },
  {
    title: 'Self-Portrait with Thorn Necklace and Hummingbird',
    year: '1940',
    location: 'Harry Ransom Center, Austin',
    note: 'A small, intense self-portrait where animals, thorns, blood, and a frontal gaze compress pain and resilience.',
    theme: 'gold',
  },
  {
    title: 'The Broken Column',
    year: '1944',
    location: 'Museo Dolores Olmedo, Mexico City',
    note: 'Kahlo represents her injured spine as a cracked column, making chronic pain architectural, stark, and unforgettable.',
    theme: 'blue',
  },
  {
    title: 'The Frame',
    year: '1938',
    location: 'Musee National d\'Art Moderne, Centre Pompidou',
    note: 'This self-portrait was acquired by the Louvre in 1939, an important international milestone for Mexican modern art.',
    theme: 'rose',
  },
]

export const Route = createFileRoute('/paintings')({
  component: Paintings,
})

function Paintings() {
  return (
    <main className="page-shell paintings-page">
      <section className="paintings-hero" aria-labelledby="paintings-title">
        <p className="kicker">Five works</p>
        <h1 id="paintings-title">Paintings</h1>
        <p className="intro">
          These five works show how Kahlo used self-portraiture, bodily
          experience, Mexican symbols, and personal history to make paintings
          that feel both intimate and monumental.
        </p>
      </section>

      <section className="paintings-list" aria-label="Five Frida Kahlo paintings">
        {paintings.map((painting, index) => (
          <article className="painting-card" key={painting.title}>
            <div className={`painting-mark painting-mark-${painting.theme}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="painting-copy">
              <p className="painting-year">{painting.year}</p>
              <h2>{painting.title}</h2>
              <p className="painting-location">{painting.location}</p>
              <p>{painting.note}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
