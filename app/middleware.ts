import { NextResponse } from 'next/server';

export function middleware(req: Request) {
    const url = new URL(req.url);

    if (url.pathname.startsWith('/sounds/')) {
        const headers = new Headers(req.headers);
        headers.delete('Range');  // ⬅ Törli a "Range" fejléceket

        return NextResponse.next({
            request: { headers }
        });
    }

    return NextResponse.next();
}
