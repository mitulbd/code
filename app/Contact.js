"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    captcha: "",
    message: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    switch (name) {
      case "phone":
        value = value.replace(/\D/g, "").slice(0, 10);        
        break;
      case "captcha":
        value = value.replace(/\D/g, "").slice(0, 2);
        break;
      case "name":
        value = value.replace(/[^a-zA-Z\s]/g, "").replace(/\s{2,}/g, " ").trimStart();
        break;
      case "email":
        value = value.replace(/\s/g, "");
        break;
      case "message":
        value = value.replace(/ {2,}/g, " "); // Remove extra spaces
        break;
      default:
        break;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        className="form-control input-name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      /><br />
      <input
        className="form-control input-tel"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      /><br />
      <input
        className="form-control input-email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /><br />
      <input
        className="form-control input-quiz"
        type="text"
        name="captcha"
        maxLength={2}
        value={formData.captcha}
        onChange={handleChange}
      /><br />
      <textarea
        className="form-control"
        name="message"
        value={formData.message}
        onChange={handleChange}
      /><br />
      <button type="submit">Submit</button><br />
    </form>
  );
}
