const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>Formulaire de contact</p>

      <label htmlFor="name">Nom complet</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom, prénom"
      />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Votre email" />

      <label htmlFor="subject">Sujet</label>
      <input type="text" id="subject" name="subject" placeholder="Sujet" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>

      {/* Vous ne verrez pas ce champ dans le formulaire, il est utilisé pour éviter le spam */}
      <input type="hidden" name="bot-field" />

      <button type="submit">Envoyer un message</button>
    </form>
  );
};

export default ContactForm;
