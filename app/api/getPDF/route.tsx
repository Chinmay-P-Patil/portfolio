import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // Path to the PDF file in the public folder
  const filePath = path.join(process.cwd(), 'public', 'chinmaypatilresume.docx');

  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Document file not found', { status: 404 });
    }

    // Read the file as a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Set response headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/docx');
    headers.set('Content-Disposition', 'attachment; filename=chinmaypatilresume.docx');

    // Return the file as a response
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}