// Manifesto quotes extracted from Vivi's blog posts
// These are displayed randomly in the footer

export interface ManifestoQuote {
  text: string
  source: string
  url: string
}

export const manifestoQuotes: ManifestoQuote[] = [
  {
    text: "Large Language Models are not intelligent. They're not thinking. They're not understanding.",
    source: 'The Illusion of Intelligence',
    url: '/blog/llm-illusion',
  },
  {
    text: "Stop building 'AI assistants.' Start building pattern-based tools that augment human intelligence.",
    source: 'The Illusion of Intelligence',
    url: '/blog/llm-illusion',
  },
  {
    text: "This is bullshit.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "Every line of code is a political act. Every API endpoint shapes behavior. Every algorithm encodes values.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "You can't build for one without enabling the other.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "It's harder. It's slower. It's worth it.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "The power of LLMs isn't that they're intelligent. It's that they're malleable.",
    source: 'The Illusion of Intelligence',
    url: '/blog/llm-illusion',
  },
  {
    text: "Pattern matching at this scale is genuinely revolutionary.",
    source: 'The Illusion of Intelligence',
    url: '/blog/llm-illusion',
  },
  {
    text: "The 'we're just building tools' defense crumbles when you realize tools shape behavior.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "A hammer doesn't just drive nails — it creates a world where problems look like nails.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "But that's the work. That's the craft.",
    source: 'Tech for the People',
    url: '/blog/tech-for-people',
  },
  {
    text: "The best code is written with one eye on the compiler and the other on the society it will shape.",
    source: 'About',
    url: '/about',
  },
  {
    text: "Technology should empower the marginalized, not entrench the powerful.",
    source: 'About',
    url: '/about',
  },
  {
    text: "Code is a tool of liberation when wielded with intention.",
    source: 'About',
    url: '/about',
  },
  {
    text: "No corporate fluff. No tech-bro optimism. Just rigorous thinking.",
    source: 'Welcome to Gem City',
    url: '/blog/welcome-gem-city',
  },
  {
    text: "The status quo is not safe here.",
    source: 'Welcome to Gem City',
    url: '/blog/welcome-gem-city',
  },
  {
    text: "If you're looking for '10x developer tips,' you're in the wrong place. Try Medium.",
    source: 'Welcome to Gem City',
    url: '/blog/welcome-gem-city',
  },
  {
    text: "Building the future while critiquing the present.",
    source: 'Homepage',
    url: '/',
  },
  {
    text: "Code. Chaos. Consciousness.",
    source: 'Gem City',
    url: '/',
  },
]

export function getRandomQuote(): ManifestoQuote {
  const index = Math.floor(Math.random() * manifestoQuotes.length)
  return manifestoQuotes[index]
}
