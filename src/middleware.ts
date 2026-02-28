import { NextRequest, NextResponse } from 'next/server'

// Включить режим техработ: в .env.local задать MAINTENANCE_MODE=true
const MAINTENANCE_MODE = true//process.env.MAINTENANCE_MODE === 'true'

const MAINTENANCE_HTML = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Технические работы — MPPSHOP</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .card {
      max-width: 440px;
      padding: 48px 32px;
      background: rgba(255,255,255,0.06);
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { font-size: 1.5rem; margin-bottom: 16px; font-weight: 600; }
    p { font-size: 1rem; line-height: 1.6; color: rgba(255,255,255,0.85); }
    .time { margin-top: 20px; font-weight: 600; color: #a5b4fc; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Ведутся технические работы</h1>
    <p>Сайт временно недоступен. Мы обновляем сервис для вашего удобства.</p>
    <p class="time">Примерное время возобновления работы — со вторника.</p>
  </div>
</body>
</html>
`

export function middleware(request: NextRequest) {
  // Режим техработ: показываем страницу на все запросы к страницам (не к статике и _next)
  if (MAINTENANCE_MODE) {
    const pathname = request.nextUrl.pathname
    const isStatic =
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/favicon') ||
      /\.(ico|png|jpg|jpeg|svg|webp|woff2?|css|js)$/i.test(pathname)
    if (!isStatic) {
      return new NextResponse(MAINTENANCE_HTML, {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Retry-After': '3600' },
      })
    }
  }

  // CORS для API
  const origin = request.headers.get('origin')
  const normalizedOrigin = origin?.replace(/\.$/, '')
  const allowedOrigins = [
    'https://mppshop.by',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ]
  const isAllowedOrigin = normalizedOrigin && allowedOrigins.includes(normalizedOrigin)

  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 })
    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', normalizedOrigin)
      response.headers.set('Access-Control-Allow-Credentials', 'true')
    }
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
    return response
  }

  const response = NextResponse.next()
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', normalizedOrigin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return response
}

// Матчер: все пути (для техработ) + API (для CORS)
export const config = {
  matcher: ['/((?!_next/static|_next/image).*)', '/api/:path*'],
}

