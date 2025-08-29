// Import images
import Project7Img1 from "../images/project-7/img1.png";
import Project7Img2 from "../images/project-7/img2.png";
import Project7Img3 from "../images/project-7/img3.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Minishop",
    publishDate: "Juin, 2024",
    tags: "E-commerce - Web Application",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Minishop",
      img: Project7Img1,
    },
    {
      id: 2,
      title: "Minishop",
      img: Project7Img2,
    },
    {
      id: 3,
      title: "Minishop",
      img: Project7Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Le projet Minishop consistait à concevoir et développer un site e-commerce complet permettant la promotion et la vente de produits. L’objectif principal était d’offrir une expérience utilisateur fluide, incluant la consultation d’articles, l’ajout au panier et la finalisation d’une commande.",
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
          "Ce projet m’a permis de réaliser une application e-commerce de A à Z, depuis la définition des besoins métiers jusqu’au déploiement en production, en intégrant à la fois les aspects front-end, back-end et DevOps.",
      },
      {
        id: 2,
        type: "text",
        content: "Fonctionnalités principales :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "Mise en place d’un catalogue produits avec fiches détaillées.",
          "Ajout et gestion des articles dans un panier utilisateur.",
          "Système de commande permettant de valider l’achat.",
        ],
      },
      {
        id: 4,
        type: "text",
        content: "Mise en place technique :",
      },
      {
        id: 5,
        type: "list",
        content: [
          "Back-end développé en Laravel pour la gestion des données et des règles métiers.",
          "Front-end en React et Tailwind CSS pour une interface moderne et responsive.",
          "Déploiement sur serveur avec Docker pour garantir la portabilité et la stabilité.",
          "Mise en place de pipelines CI/CD et de tests pour sécuriser les déploiements.",
        ],
      },
      {
        id: 6,
        type: "text",
        content: "Compétences Développées :",
      },
      {
        id: 7,
        type: "list",
        content: [
          "Expérience concrète sur un projet e-commerce de bout en bout.",
          "Maîtrise des interactions front/back avec React et Laravel.",
          "Amélioration de mes compétences DevOps : Docker, CI/CD, mise en production.",
          "Vision globale d’un projet web allant de la conception à l’exploitation.",
        ],
      },
      {
        id: 8,
        type: "text",
        content:
          "Ce projet a été particulièrement enrichissant car il combinait à la fois les enjeux techniques du e-commerce et la mise en œuvre de pratiques modernes de déploiement.",
      },
    ],
  },
  RelatedProject: {
    title: "Autres projets",
    Projects: [
      {
        id: 1,
        title: "Backoffice",
        img: Project7Img3,
      },
      {
        id: 2,
        title: "Biiip",
        img: Project7Img3,
      },
      {
        id: 3,
        title: "Constellation Familial",
        img: Project7Img3,
      },
      {
        id: 4,
        title: "Puissance 4",
        img: Project7Img3,
      },
    ],
  },
};
