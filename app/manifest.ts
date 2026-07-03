import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crosiz — AI Systems & Software Development Agency',
    short_name: 'Crosiz',
    description:
      'Crosiz builds intelligent software, AI automations, and digital products for startups and enterprises.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066FF',
    orientation: 'portrait-primary',
    categories: ['business', 'technology', 'productivity'],
    icons: [
      {
        src: '/crosiz-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/crosiz-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Book Discovery Call',
        url: '/contact',
        description: 'Schedule a free 30-min discovery call',
      },
      {
        name: 'View Our Work',
        url: '/work',
        description: 'Browse our case studies and portfolio',
      },
      {
        name: 'Our Services',
        url: '/services',
        description: 'Explore what we build',
      },
    ],
  };
}
