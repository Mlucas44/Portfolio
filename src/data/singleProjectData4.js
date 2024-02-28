// Import images
import Project4Img1 from "../images/project-4/img1.png";
import Project4Img2 from "../images/project-4/img2.png";
import Project4Img3 from "../images/project-4/img3.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Dashboard",
    publishDate: "Février, 2024",
    tags: "Web Application",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Dashboard",
      img: Project4Img1,
    },
    {
      id: 2,
      title: "Dashboard",
      img: Project4Img2,
    },
    {
      id: 3,
      title: "Dashboard",
      img: Project4Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
    "Le but de ce projet était de concevoir un tableau de bord modulaire, intégrant une variété de composants réutilisables, allant de boutons simples et listes déroulantes à des tableaux complexes et calendriers interactifs. Cette bibliothèque de composants a été conçue pour faciliter le développement rapide et efficace de divers types de projets en réutilisant ces éléments préfabriqués.",
	Technologies: [
      {
        title: "Technologies",
        techs: [
          "Front-end : React avec Hooks API pour un développement fonctionnel, Material UI v5 pour l'interface utilisateur, Redux pour la gestion de l'état, React Router pour le routage, et Axios pour les requêtes API.",
          "Authentification : Auth0, Firebase, JWT, AWS Cognito pour des options d'authentification flexibles.",
          "Optimisation et outils : Vite.js pour une amélioration significative du temps de développement, support de TypeScript pour une sécurité de type accrue, CSS-in-JS pour une stylisation cohérente et dynamique, prise en charge multilingue, Next.js et Remix pour le rendu côté serveur et l'optimisation des performances.",
          "Autres : Un ensemble riche de plugins de formulaire, validation, animations CSS, et plus de 2000 icônes.",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
        "L'adoption de technologies de pointe telles que React couplé à Material UI, ainsi que l'intégration de Vite.js, a nécessité une courbe d'apprentissage pour maîtriser ces outils modernes et optimiser le processus de développement.",      },
      {
        id: 2,
        type: "text",
        content: "Fonctionnalités :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "Composants UI : Création de plus de 95 pages prêtes à l'emploi et plus de 50 widgets pour des applications variées (e-commerce, chat, gestion des utilisateurs).",         
          "Flexibilité : Conception d'une mise en page verticale avec support de menus multiniveaux et d'un Live Customizer pour la personnalisation de l'UI.",
          "Réalisation de dashboards : Deux dashboards conceptuels avec une variété de variantes de tableau pour afficher et gérer les données efficacement.",
          "Sécurité et maintenance : Implémentation de pages d'authentification et de maintenance pour une expérience utilisateur complète et sécurisée.",          
        ],
      },
      {
        id: 4,
        type: "text",
        content: "Compétences Développées :",
      },
      {
        id: 5,
        type: "list",
        content: [
          "Maîtrise des technologies modernes : Approfondissement de ma connaissance en React, Material UI, et autres outils de développement front-end modernes.",
          "Conception modulaire : Capacité à construire une architecture de projet efficace, centrée sur la réutilisation de composants pour accélérer le développement.",
          "Résolution de problèmes : Développement d'une approche méthodique pour surmonter les défis techniques, en particulier liés à l'intégration de technologies récentes.",
          "Gestion de l'état et routage : Utilisation avancée de Redux et React Router pour une gestion d'état complexe et un routage dynamique.",
          "Optimisation du développement : Expérience acquise avec Vite.js pour améliorer la rapidité et l'efficacité du workflow de développement.",
        ],
      },
    ],
  },
  RelatedProject: {
    title: "Autres projets",
    Projects: [
      {
        id: 1,
        title: "Puissance 4",
        img: Project4Img3,
      },
      {
        id: 2,
        title: "Web Application",
        img: Project4Img3,
      },
      {
        id: 3,
        title: "UI Design",
        img: Project4Img3,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Project4Img3,
      },
    ],
  },
};
