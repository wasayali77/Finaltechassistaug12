
// src/app/api/health/route.ts
export async function GET() {
  console.log('✅ Health check endpoint called');
  
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'tech-app'
  });
}
