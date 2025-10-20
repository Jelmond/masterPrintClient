import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Получаем Origin из заголовков запроса
  const origin = request.headers.get('origin')
  
  // Нормализуем Origin - убираем точку в конце, если она есть
  const normalizedOrigin = origin?.replace(/\.$/, '')
  
  // Список разрешенных origins
  const allowedOrigins = [
    'https://mppshop.by',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ]
  
  // Проверяем, разрешён ли нормализованный origin
  const isAllowedOrigin = normalizedOrigin && allowedOrigins.includes(normalizedOrigin)
  
  // Обрабатываем preflight запросы (OPTIONS)
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
  
  // Для обычных запросов получаем ответ и добавляем CORS заголовки
  const response = NextResponse.next()
  
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', normalizedOrigin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  return response
}

// Настраиваем matcher для применения middleware только к API routes
export const config = {
  matcher: '/api/:path*',
}

