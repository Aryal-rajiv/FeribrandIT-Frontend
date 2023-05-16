import React, { useState } from "react";
import nodemailer from "nodemailer";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a transporter using your email service provider settings
    const transporter = nodemailer.createTransport({
      service: "Your Email Service Provider",
      auth: {
        user: "Your Email",
        pass: "Your Password",
      },
    });

    // Prepare the email content
    const mailOptions = {
      from: formData.email,
      to: "Your Email", // Enter your email address to receive the message
      subject: "New Contact Form Submission",
      text: `
        Username: ${formData.username}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }

    // Clear the form data
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* Your existing JSX code */}

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      {/* Your existing JSX code */}
    </>
  );
}
