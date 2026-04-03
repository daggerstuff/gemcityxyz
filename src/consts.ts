import type { IconMap, Site, SocialLink } from '@/types'

export const SITE: Site = {
  title: 'Gem City',
  description:
    "Code. Chaos. Consciousness. Vivi's digital embassy for tech discourse, AI exploration, and forward-thinking insurrection.",
  href: 'https://gemcity.xyz',
  author: 'vivi',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 6,
}

// Google Analytics
// Configure via environment variable: PUBLIC_GOOGLE_ANALYTICS_ID
export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

// Umami Analytics
// Configure via environment variable: PUBLIC_UMAMI_WEBSITE_ID
export const UMAMI = {
  websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '',
}

// Disqus Comments
// Get your shortname from https://disqus.com/admin/settings/general/
// Set it as an environment variable: PUBLIC_DISQUS_SHORTNAME=your-shortname
export const DISQUS = {
  shortname: import.meta.env.PUBLIC_DISQUS_SHORTNAME || '',
}

// Brevo Newsletter
// Get your API key from https://app.brevo.com/settings/keys/api
// Set it as an environment variable: BREVO_API_KEY=your-api-key
// Optional: Set BREVO_LIST_ID to automatically add subscribers to a specific list
// Optional: Set BREVO_TEMPLATE_ID for double opt-in confirmation email (default: 5)
export const BREVO = {
  apiKey: import.meta.env.BREVO_API_KEY || '',
  listId: import.meta.env.BREVO_LIST_ID || '',
  templateId: import.meta.env.BREVO_TEMPLATE_ID || '5',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/daggerstuff',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/chadisfaction',
    label: 'Twitter',
  },
  {
    href: 'mailto:chad@gemcity.xyz',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// Newsletter consent text (centralized for GDPR compliance)
export const NEWSLETTER_CONSENT_TEXT = {
  text: 'I agree to receive newsletter emails.',
  privacyLink: '/privacy',
  privacyText: 'Privacy Policy',
}

// Dead Drop Security Configuration
export const DEAD_DROP = {
  enabled: false,
  email: 'dead-drop@gemcity.xyz',
  fingerprint: 'A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF',
  keyBlock: `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGcKj7MBEAC5...
[Key fingerprint: A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF]
-----END PGP PUBLIC KEY BLOCK-----`,
}
