function Contact(){
  return(
    <>
    <section className="contact">
      <h1>Contact Us</h1>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
      
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
      
          <label>Message:</label>
          <textarea rows="5" placeholder="Enter your message"></textarea>
      
          <button type="submit">
            Send Message
          </button>
        </form>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30150.72150879356!2d-98.4076634!3d19.158471499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfcddce8e4b189%3A0x695447bb636379ce!2s74160%20Huejotzingo%2C%20Puebla%2C%20Mexico!5e0!3m2!1sen!2sus!4v1781838516875!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </section>
    </>
  );
}
  
export default Contact;