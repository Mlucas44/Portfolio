// Import images
import Project2Img1 from "../images/project-2/img1.jpg";
import Project2Img2 from "../images/project-2/img2.jpg";
import Project2Img3 from "../images/project-2/img3.jpg";

export const singleProjectData = {
  ProjectHeader: {
    title: "To Do List",
    publishDate: "Mai, 2023",
    tags: "Web Application",
  },
  ProjectImages: [
    {
      id: 1,
      title: "To Do List",
      img: Project2Img1,
    },
    {
      id: 2,
      title: "To Do List",
      img: Project2Img2,
    },
    {
      id: 3,
      title: "To Do List",
      img: Project2Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Ce projet consistait à créer une application to-do list interactive et conviviale. L'objectif principal était de renforcer mes compétences en React, notamment en gestion d'état et en interaction avec le stockage local du navigateur (LocalStorage).",
    Technologies: [
      {
        title: "Technologies",
        techs: [
          "React",
          "HTML",
          "CSS",
          "JavaScript",
          "LocalStorage pour la persistance des données",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Ce projet a été une excellente opportunité pour moi de consolider mes connaissances en React et de comprendre les subtilités de la gestion de l'état local et de la persistance des données dans les applications web.",
      },
      {
        id: 2,
        type: "text",
        content: "Fonctionnalités :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "- Création de Tâches : Les utilisateurs peuvent ajouter de nouvelles tâches à leur liste.",
          "- Modification et Suppression : Chaque tâche peut être modifiée ou supprimée.",
          "- Persistance des Données : Grâce à l'utilisation de LocalStorage, les tâches restent disponibles même après le rechargement de la page.",
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
          "- Gestion d'État en React : Maîtrise des hooks tels que useState pour gérer l'état local des composants.",
          "- Manipulation du LocalStorage : Apprendre à stocker, récupérer, et mettre à jour des données dans le navigateur de l'utilisateur.",
          "- Développement Front-End : Renforcement de mes compétences en HTML, CSS et JavaScript pour une interface utilisateur réactive et attrayante.",
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
        img: Project2Img1,
      },
      {
        id: 2,
        title: "Web Application",
        img: Project2Img1,
      },
      {
        id: 3,
        title: "UI Design",
        img: Project2Img1,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Project2Img1,
      },
    ],
  },
};
