// Import images
import Project6Img1 from "../images/project-6/img1.png";
import Project6Img2 from "../images/project-6/img2.png";
import Project6Img3 from "../images/project-6/img3.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Backoffice",
    publishDate: "Février - Juillet, 2024",
    tags: "Web Application - Refonte",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Backoffice",
      img: Project6Img1,
    },
    {
      id: 2,
      title: "Backoffice",
      img: Project6Img2,
    },
    {
      id: 3,
      title: "Backoffice",
      img: Project6Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Ce projet avait pour but de réaliser une refonte complète d’un ancien backoffice développé en PHP natif. L’objectif principal était de moderniser l’architecture en mettant en place un système robuste et évolutif, basé sur Laravel pour le back-end et React avec Tailwind pour le front-end.",
    Technologies: [
      {
        title: "Technologies",
        techs: [
          "Laravel",
          "React",
          "Tailwind CSS",
          "Docker",
          "CI/CD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Ce projet d’envergure m’a permis de reprendre un ancien système obsolète et de le transformer en une application moderne et performante. J’ai assuré l’ensemble du cycle de développement, de la conception à la mise en production.",
      },
      {
        id: 2,
        type: "text",
        content: "Fonctionnalités et mise en place :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "Développement du back-end avec Laravel.",
          "Création d’une interface utilisateur moderne en React et Tailwind CSS.",
          "Déploiement et mise en production à l’aide de Docker.",
          "Mise en place de pipelines CI/CD pour automatiser les tests et le déploiement.",
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
          "Expérience complète sur un projet de A à Z, de la conception à la production.",
          "Montée en compétence sur Laravel et React dans un contexte professionnel.",
          "Maîtrise de Docker pour l’orchestration et le déploiement.",
          "Mise en place et utilisation d’une intégration continue et de tests automatisés.",
        ],
      },
      {
        id: 6,
        type: "text",
        content:
          "Ce projet a été particulièrement formateur et enrichissant, car il m’a confronté à la gestion d’un projet complet avec des enjeux réels de performance, de maintenabilité et de déploiement.",
      },
    ],
  },
  RelatedProject: {
    title: "Autres projets",
    Projects: [
      {
        id: 1,
        title: "Biiip",
        img: Project6Img3,
      },
      {
        id: 2,
        title: "Constellation Familial",
        img: Project6Img3,
      },
      {
        id: 3,
        title: "Puissance 4",
        img: Project6Img3,
      },
      {
        id: 4,
        title: "Web Application",
        img: Project6Img3,
      },
    ],
  },
};
