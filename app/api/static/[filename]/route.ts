import { NextResponse } from "next/server";
import { createReadStream, statSync } from "fs";
import { join } from "path";

export async function GET(req: Request, { params }: { params: { filename: string } }) {
    try {
        const filePath = join(process.cwd(), "public/sounds", params.filename);
        const fileStat = statSync(filePath);

        const headers = new Headers();
        headers.set("Content-Type", "audio/mpeg");
        headers.set("Content-Length", fileStat.size.toString());

        const stream = createReadStream(filePath);
        return new NextResponse(stream as any, { headers });
    } catch (error) {
        return new NextResponse("File not found", { status: 404 });
    }
}
