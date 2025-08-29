// Import images
import Project4Img1 from "../images/project-4/img1.jpeg";
import Project4Img2 from "../images/project-4/img2.jpeg";
import Project4Img3 from "../images/project-4/img3.jpeg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Constellation Familial",
    publishDate: "Avril, 2025",
    tags: "Site Vitrine - Composants Nuxt.js",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Constellation Familial",
      img: Project4Img1,
    },
    {
      id: 2,
      title: "Constellation Familial",
      img: Project4Img2,
    },
    {
      id: 3,
      title: "Constellation Familial",
      img: Project4Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Le projet Constellation Familial visait à concevoir et développer des composants personnalisés pour un site vitrine, à partir d'une maquette Figma fournie par le client. L’objectif principal était de livrer des composants Nuxt.js et SCSS fidèles à la maquette, tout en garantissant un rendu responsive irréprochable.",
    Technologies: [
      {
        title: "Technologies",
        techs: [
          "Nuxt.js",
          "SCSS",
          "Figma",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Ce projet freelance m’a permis de répondre à une demande précise du client : développer des composants front-end parfaitement conformes à sa maquette, avec une attention particulière portée à la précision visuelle et au responsive design.",
      },
      {
        id: 2,
        type: "text",
        content: "Contraintes techniques :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "Respecter scrupuleusement la maquette Figma fournie.",
          "Assurer un design responsive optimal sur tous les supports (mobile, tablette, desktop).",
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
          "Amélioration de mes compétences en responsive design grâce à une mise en pratique intensive.",
          "Renforcement de la relation client à travers la communication et la gestion des attentes en freelance.",
          "Capacité à transformer une maquette Figma en composants front-end exploitables et performants.",
        ],
      },
      {
        id: 6,
        type: "text",
        content:
          "Ce projet a été particulièrement enrichissant, tant sur le plan technique que relationnel, en me confrontant à des attentes élevées en matière de qualité et de précision.",
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
