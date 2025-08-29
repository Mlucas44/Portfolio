// Import images
import Project5Img1 from "../images/project-5/img1.png";
import Project5Img2 from "../images/project-5/img2.png";
import Project5Img3 from "../images/project-5/img3.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Biiip",
    publishDate: "Janvier - Juin, 2025",
    tags: "Application Mobile - Paiement",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Biiip",
      img: Project5Img1,
    },
    {
      id: 2,
      title: "Biiip",
      img: Project5Img2,
    },
    {
      id: 3,
      title: "Biiip",
      img: Project5Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Le projet Biiip avait pour objectif de digitaliser les pourboires en intégrant une solution moderne et intuitive dans une application mobile. Ce projet m’a amené à explorer en profondeur le domaine de la monétique et des terminaux de paiement, afin de proposer une expérience fluide et sécurisée aux utilisateurs.",
    Technologies: [
      {
        title: "Technologies",
        techs: [
          "React Native",
          "Stripe",
          "JavaScript",
          "UX/UI Design",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Ce projet académique a été l’occasion de travailler sur un cas concret d’innovation dans le domaine des paiements numériques. J’ai dû concevoir une application mobile permettant de gérer des transactions simples, rapides et sécurisées.",
      },
      {
        id: 2,
        type: "text",
        content: "Fonctionnalités développées :",
      },
      {
        id: 3,
        type: "list",
        content: [
          "Intégration de la solution de paiement Stripe dans l’application.",
          "Mise en place d’une interface utilisateur ludique et ergonomique.",
          "Création d’un modèle de digitalisation des pourboires accessible sur mobile.",
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
          "Découverte et compréhension des enjeux liés à la monétique et aux terminaux de paiement.",
          "Montée en compétence sur React Native et intégration d’API externes (Stripe).",
          "Amélioration de mes connaissances en design d’interface et expérience utilisateur.",
          "Développement de mon autonomie grâce à une forte part d’auto-formation.",
        ],
      },
      {
        id: 6,
        type: "text",
        content:
          "Ce projet a été une expérience formatrice et stimulante, combinant technique, design et innovation autour d’un sujet concret et actuel.",
      },
    ],
  },
  RelatedProject: {
    title: "Autres projets",
    Projects: [
      {
        id: 1,
        title: "Constellation Familial",
        img: Project5Img3,
      },
      {
        id: 2,
        title: "Puissance 4",
        img: Project5Img3,
      },
      {
        id: 3,
        title: "UI Design",
        img: Project5Img3,
      },
      {
        id: 4,
        title: "Web Application",
        img: Project5Img3,
      },
    ],
  },
};
