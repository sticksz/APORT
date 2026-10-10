import React, { useState } from "react";

const CONTACT_EMAIL = "Hoseaisa2783@gmail.com";
const WHATSAPP_URL = "https://wa.me/2349161282666";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio enquiry from ${name}`,
        }),
      });

      const result = await response.json();
      if (!response.ok || (result.success !== "true" && result.success !== true)) {
        throw new Error(result.message || "The email service could not accept your message.");
      }

      setStatus("Message sent. Thank you for getting in touch!");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? `Message not sent: ${error.message} Please try again or email me directly.`
          : "Message not sent. Please try again or email me directly."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="section section-border page-panel">
      <div className="section-heading">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Have a project in mind?</h2>
        <p>Tell me a little about it. I'll be happy to hear from you.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input name="name" type="text" maxLength="100" autoComplete="name" placeholder="Enter your name" required />
        </label>
        <label>
          Your email
          <input name="email" type="email" maxLength="254" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          Your message
          <textarea name="message" rows="5" maxLength="3000" placeholder="Tell me about your project..." required />
        </label>
        <button className="button primary submit-button" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send message"}
        </button>
        {status && <p className="form-note" role="status">{status}</p>}
        <p className="small-note">
          Messages are sent securely through FormSubmit to my email. On the first
          submission, I need to confirm my address with their activation email.
          You can also reach me on WhatsApp.
        </p>
        <a className="whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Message me on WhatsApp ↗</a>
      </form>
      <p className="public-email">Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </section>
  );
}
