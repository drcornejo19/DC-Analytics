import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const solution = String(body.solution ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    if (website) {
      return NextResponse.json({ message: "Mensaje recibido." });
    }

    if (name.length < 2 || !EMAIL_PATTERN.test(email) || !solution || message.length < 10) {
      return NextResponse.json(
        { message: "Revisá los campos obligatorios antes de enviar." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
      return NextResponse.json(
        { message: "El formulario todavía no está configurado. Podés contactarnos por WhatsApp o email." },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DC Analytics Web <onboarding@resend.dev>",
        to: [contactEmail],
        reply_to: email,
        subject: `Nueva consulta: ${solution}`,
        text: [
          `Nombre: ${name}`,
          `Empresa: ${company || "No informada"}`,
          `Email: ${email}`,
          `Teléfono: ${phone || "No informado"}`,
          `Solución: ${solution}`,
          "",
          "Mensaje:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return NextResponse.json(
        { message: "No pudimos enviar el mensaje. Intentá nuevamente o escribinos por otro medio." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { message: "No pudimos procesar la solicitud." },
      { status: 500 },
    );
  }
}
