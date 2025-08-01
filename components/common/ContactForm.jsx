import React, { useState } from "react";
import Card from "@/components/common/Card";
import api from "@/lib/api";

const ContactForm = () => {
    const initialForm = {
        name: "",
        email: "",
        message: ""
    };
    const initialAlert = {
        show: false,
        message: "",
        type: "success"
    };
    const [form, setForm] = useState(initialForm);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(initialAlert);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await api.sendMessage(form);
            setForm(initialForm);
            setAlert({
                show: true,
                message: "Your message has been sent successfully!",
                type: "success"
            });
        } catch (error) {
            setAlert({
                show: true,
                message: "Your message couldn't be submitted in moment!",
                type: "error"
            });
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setAlert(initialAlert);
            }, 5000);
        }
    };
    return (
        <Card>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button className="button" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner"></div>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>

            {alert.show && (
                <div
                    className={`form-alert ${alert.type == "error" ? "error" : ""}`}
                >
                    {alert.message}
                </div>
            )}
        </Card>
    );
};

export default ContactForm;
