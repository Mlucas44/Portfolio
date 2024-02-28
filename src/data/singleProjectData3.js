// Import images
import Project3Img1 from "../images/project-3/img1.png";
import Project3Img2 from "../images/project-3/img2.png";
import Project3Img3 from "../images/project-3/img3.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Berthelot",
    publishDate: "Février, 2024",
    tags: "Web Application",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Berthelot",
      img: Project3Img1,
    },
    {
      id: 2,
      title: "Berthelot",
      img: Project3Img2,
    },
    {
      id: 3,
      title: "Berthelot",
      img: Project3Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
		"Le projet Berthelot visait à développer un back-office personnalisé pour un client qui exprimait le besoin d'une gestion plus autonome de ses données. L'objectif principal était de fournir au client les moyens de contrôler, de manière indépendante, ses données utilisateurs, ses communes et ses avenants. Cela incluait la possibilité de consulter, d'ajouter, de modifier et de supprimer ces données selon les besoins.",
	Technologies: [
      {
        title: "Technologies",
        techs: [
          "PHP",
          "JavaScript",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Ce projet a marqué ma première mission dans le contexte professionnel, me confrontant à la nécessité d'établir une communication efficace avec le client pour comprendre ses problèmes, ses désirs et lui proposer des solutions adaptées.",
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
			"J'ai conçu et implémenté une interface d'administration permettant d'exécuter les opérations CRUD (Création, Lecture, Mise à jour, Suppression) pour les tables des utilisateurs, des communes et des avenants. L'interface se devait d'être intuitive et facile à utiliser.",
        ],
      },
      {
        id: 4,
        type: "text",
        content: "Contraintes techniques :",
      },
      {
        id: 5,
        type: "list",
        content: [
          "L'un des principaux défis a été de travailler sur une base de code existante utilisant PHP dans une version considérablement ancienne, à laquelle je n'étais pas familier. Il a fallu s'adapter à cette technologie datée pour répondre aux exigences du projet tout en respectant le budget limité du client, qui ne souhaitait pas un investissement conséquent, me poussant à optimiser le temps de développement pour limiter les coûts.",
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
			"Ce projet m'a permis d'acquérir et de développer plusieurs compétences clés, notamment la capacité à traduire les besoins d'un client en un cahier des charges technique précis et la mise en œuvre de solutions technologiques adaptées à des problématiques spécifiques.",
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
        img: Project3Img3,
      },
      {
        id: 2,
        title: "Web Application",
        img: Project3Img3,
      },
      {
        id: 3,
        title: "UI Design",
        img: Project3Img3,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Project3Img3,
      },
    ],
  },
};
