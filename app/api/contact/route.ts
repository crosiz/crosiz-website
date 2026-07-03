import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    // 1. Save to Database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company,
        service,
        budget,
        message,
      },
    });

    // 2. Send to n8n Webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.crosiz.com/webhook/contact';
    const webhookToken = process.env.N8N_WEBHOOK_TOKEN || 'YOUR_N8N_TOKEN';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${webhookToken}`,
        },
        body: JSON.stringify({ name, email, company, service, budget, message }),
      });

      if (response.ok) {
        await prisma.contactSubmission.update({
          where: { id: submission.id },
          data: { n8nSent: true },
        });
      }
    } catch (error) {
      console.error('Failed to send to n8n:', error);
      // We don't throw here so the user still gets a success response
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
