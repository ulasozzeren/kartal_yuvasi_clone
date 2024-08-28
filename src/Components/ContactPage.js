import React, { useState } from 'react';
import './ContactPage.css'; // CSS dosyasını daha sonra oluşturacağız

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme (örneğin, API çağrısı)
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Ad:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-posta:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mesaj:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Gönder</button>
      </form>

      <div className="contact-info">
        <h3>İletişim Bilgilerimiz</h3>
        <p>Telefon: +90 539 597 24 71</p>
        <p>Email: ulasozzeren1903@hotmail.com</p>
        <p>
        LinkedIn: <a href="https://www.linkedin.com/in/ula%C5%9F-%C3%B6zzeren-28164b225" >Ulaş Özzeren</a>
      </p>
      <p>
        Github: <a href="https://www.linkedin.com/in/ula%C5%9F-%C3%B6zzeren-28164b225" >ulasozzeren</a>
      </p>
      <div className="map__container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.373537219333!2d29.130070299999996!3d40.929479900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6a37ef0084f%3A0xf91e90ca3f5d4d78!2s%C4%B0nci%20Sitesi!5e0!3m2!1str!2str!4v1720706591515!5m2!1str!2str"></iframe>

      </div>
      </div>
    </div>
  );
};

export default ContactPage;
