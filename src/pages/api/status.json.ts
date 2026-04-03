import type { APIRoute } from 'astro'
import portfolioStatus from '@/data/portfolio-status.json'

export const prerender = true

export const GET: APIRoute = async () => {
  try {
    // Update the lastUpdated timestamp to current time
    const status = {
      ...portfolioStatus,
      lastUpdated: new Date().toISOString(),
    }

    return new Response(JSON.stringify(status), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60', // Cache for 1 minute
      },
    })
  } catch (error) {
    console.error('Error serving portfolio status:', error)
    return new Response(
      JSON.stringify({
        activity: 'Status unavailable',
        lastUpdated: new Date().toISOString(),
        portfolioUrl: 'https://gemcity.xyz',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
