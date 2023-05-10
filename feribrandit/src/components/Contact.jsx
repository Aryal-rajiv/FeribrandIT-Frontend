import React from "react";
export default function Contact(){
    return(
        <>
        <div className="wrapper">

<h3 className="Common-paragraph">Thank you very much for your interest in FeribrandIT- Way of sustainable fashion!</h3>
<p className="Common-paragraph">No matter what stage you are at planning for your fashion, we are here to help. Please, do not hesitate to contact us with any questions you may have – it is our pleasure to help you with your fashion and we are always happy to hear from you.

    Send us an email at any time!  We will get back to you on the email within 24 hours. In case you did not see our reply, please do check the spam folder. </p>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.273530900572!2d84.43790322389646!3d27.708839675428514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e4ad70984a03%3A0xc2c47a165d3449dd!2sAaptari%2C%20Bharatpur%2044200!5e0!3m2!1sen!2snp!4v1681920449983!5m2!1sen!2snp" title="map"
      width="100%" 
      height="450" 
      style={{ border:0 }}
      allowfullscreen=""
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xgebrypg" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="Username" required autoComplete="off"/>
            <input type="email"placeholder="Email" value="" />
            <textarea name="Message" cols="30" rows="10" required autoComplete="off" 
            placeholder="Enter your message"></textarea>
            <input type="submit" value="submit" />

          </form>
        </div>
      </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a clothing store committed to providing high-quality sustainable fashion for every occasion.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: feribrandit@gmail.com</p>
          <p>Phone: +977 9860620334</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FeribrandIT Store. All rights reserved.</p>
      </div>
    </footer>

        </>
    )
}