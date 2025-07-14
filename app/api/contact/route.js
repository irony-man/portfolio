import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill out all fields.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Enquiry from portfolio from ${name}`,
            html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
				<hr>
				<h3>Message:</h3>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: 'There was an error sending the email.' },
            { status: 500 }
        );
    }
}
