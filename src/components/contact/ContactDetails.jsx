import { FiPhone, FiMapPin, FiMail, FiInstagram } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "44000 Nantes",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "dev.mlucas@outlook.fr",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "06 51 25 91 39",
    icon: <FiPhone />,
  },
  {
    id: 4,
    name: "dev.mlucas",
    icon: <FiInstagram />,
    url: "https://www.instagram.com/dev.mlucas",
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Coordonnées
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              {contact.url ? (
                <a
                  href={contact.url}
                  className="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                  target="_blank" // s'ouvre dans un nouvel onglet
                  rel="noopener noreferrer" // pour des raisons de sécurité
                >
                  {contact.name}
                </a>
              ) : (
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
