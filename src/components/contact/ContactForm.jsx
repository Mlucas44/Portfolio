import FormInput from "../reusable/FormInput";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          {/* Vous ne verrez pas ce champ dans le formulaire, il est utilisé pour éviter le spam */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Formulaire de contact
          </p>
          <FormInput
            inputLabel="Nom complet"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Votre nom, prénom"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Votre email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Sujet"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Sujet"
            ariaLabelName="Subject"
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-50 px-4 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
              aria-label="Send Message"
            >
              Envoyer un message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
