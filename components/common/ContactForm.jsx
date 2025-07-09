import React from "react";
import Card from "@/components/common/Card";

const ContactForm = () => (
    <Card>
        <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button className="button" type="submit">Send Message</button>
        </form>
    </Card>
);

export default ContactForm;