import { NextResponse } from 'next/server';
import * as cookie from 'cookie';


export async function POST(req: Request) {
  const cookies = cookie.parse(req.headers.get('cookie') || '');
  let count = parseInt(cookies.chatbot_questions || '0');
  const limit = parseInt(process.env.CHATBOT_LIMIT || '5');

  if (count >= limit) {
    return NextResponse.json({ error: 'Limit reached' }, { status: 403 });
  }

  const { message } = await req.json();
  const keys = process.env.HUGGINGFACE_API_KEYS?.split(',') || [];
  let response;
  let usedKey: string | null = null;

  for (const key of keys) {
    response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: message })
    });

    if (response.ok) {
      usedKey = key;
      break;
    }
  }

  if (!response || !response.ok) {
    return NextResponse.json({ error: 'All API keys failed or exhausted.' }, { status: 500 });
  }

  const resData = await response.json();
  const res = NextResponse.json(resData);
  res.headers.append(
    'Set-Cookie',
    cookie.serialize('chatbot_questions', String(count + 1), { path: '/', maxAge: 60 * 60 * 24 })
  );
  return res;
}
