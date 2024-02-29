const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/">
      <input type="text" name="name" placeholder="Votre nom" />
      <input type="email" name="email" placeholder="Votre email" />
      <textarea name="message" placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
