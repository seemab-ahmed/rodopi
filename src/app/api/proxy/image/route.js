import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    // Basic validation: only allow http(s)
    if (!/^https?:\/\//i.test(url)) {
      return NextResponse.json({ error: 'Invalid url' }, { status: 400 });
    }

    // Optional host allowlist for safety - permit sociablekit and common CDN hosts
    const parsed = new URL(url);
    const allowedHosts = [
      'data-image.sociablekit.com',
      'sociablekit.com',
      'media.licdn.com',
      'lh3.googleusercontent.com',
      'linkedin.com',
      'i.pravatar.cc', // avatar service
      'cdn.jsdelivr.net',
      'cdnjs.cloudflare.com',
    ];
    if (!allowedHosts.some(h => parsed.hostname === h || parsed.hostname.endsWith('.' + h))) {
      // If you want to allow more hosts, extend the allowedHosts array
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }

    // Try to fetch with browser-like headers to avoid hotlink protections
    const headersInit = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36',
      'Referer': parsed.hostname.includes('licdn') ? 'https://www.linkedin.com/' : 'https://widgets.sociablekit.com/',
      'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      'Sec-Fetch-Dest': 'image',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': parsed.hostname.includes('licdn') ? 'cross-site' : 'cross-site',
    };

    let resp;
    try {
      resp = await fetch(url, { method: 'GET', headers: headersInit });
    } catch (err) {
      console.warn('Upstream fetch error', err);
      resp = null;
    }

    if (!resp || !resp.ok) {
      console.error('Image proxy: fetch failed', {
        url,
        status: resp?.status,
        statusText: resp?.statusText,
      });
      // Return a small SVG placeholder when upstream fetch fails
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"><rect width="100%" height="100%" rx="6" fill="#f3f4f6"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="10">no image</text></svg>`;
      const fallbackHeaders = new Headers({ 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=60', 'Access-Control-Allow-Origin': '*' });
      return new Response(svg, { status: 200, headers: fallbackHeaders });
    }

    const contentType = resp.headers.get('content-type') || '';
    if (!contentType.startsWith('image')) {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"><rect width="100%" height="100%" rx="6" fill="#f3f4f6"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="10">no image</text></svg>`;
      const fallbackHeaders = new Headers({ 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=60', 'Access-Control-Allow-Origin': '*' });
      return new Response(svg, { status: 200, headers: fallbackHeaders });
    }

    const headers = new Headers(resp.headers);
    // Ensure proper CORS and caching headers
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Cache-Control', 'public, max-age=3600');

    const body = await resp.arrayBuffer();

    return new Response(Buffer.from(body), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
