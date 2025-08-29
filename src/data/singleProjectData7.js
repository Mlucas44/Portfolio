// Import images
import Project1Img1 from "../images/project-1/img1.jpg";
import Project1Img2 from "../images/project-1/img2.jpg";
import Project1Img3 from "../images/project-1/img3.jpg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Puissance 4",
    publishDate: "Avril, 2023",
    tags: "C++",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Puissance 4",
      img: Project1Img1,
    },
    {
      id: 2,
      title: "Puissance 4",
      img: Project1Img2,
    },
    {
      id: 3,
      title: "Puissance 4",
      img: Project1Img3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "L'objectif de ce projet était de développer mes compétences en programmation C++ en créant un mini-jeu sur console, à savoir le Puissance 4.",
    Technologies: [
      {
        title: "Technologies",
        techs: ["C++", "DockerFile", "CMake"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        type: "text",
        content:
          "Le jeu de puissance 4 est un programme en ligne de commande qui permet à deux joueurs de jouer au célèbre jeu de puissance 4 sur une grille 7x6. Les joueurs jouent à tour de rôle en entrant le numéro de la colonne où ils souhaitent placer leur jeton.",
      },
      {
        id: 2,
        type: "text",
        content:
          "Les fonctionnalités du jeu de Puissance 4 comprennent l'affichage de la grille de jeu dans la console, la sélection de la colonne par les joueurs pour placer leur jeton, la vérification des conditions de victoire, de match nul ou de continuité du jeu, et l'affichage du résultat final du jeu. Les joueurs ont également la possibilité de recommencer une partie. Le programme utilise des tableaux statiques ou dynamiques pour représenter la grille de jeu, une classe pour gérer le jeu et des boucles for pour vérifier les conditions de victoire.",
      },
      {
        id: 3,
        type: "text",
        content:
          "Les contraintes techniques du programme du jeu de Puissance 4 incluent l'utilisation de tableaux statiques ou dynamiques pour représenter la grille de jeu, l'implémentation d'une classe pour gérer le jeu avec des méthodes pour afficher la grille, effectuer les mouvements, vérifier les conditions de victoire et gérer les tours de jeu. Le programme doit utiliser des boucles for pour parcourir la grille et vérifier les conditions de victoire, gérer les erreurs d’entrée utilisateur et les exceptions telles que les colonnes pleines ou les entrées non valides. Enfin, le programme doit utiliser des caractères spécifiques pour représenter les jetons des joueurs et les cases vides de la grille.",
      },
    ],
  },
  RelatedProject: {
    title: "Autres projets",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Project1Img2,
      },
      {
        id: 2,
        title: "Web Application",
        img: Project1Img2,
      },
      {
        id: 3,
        title: "UI Design",
        img: Project1Img3,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Project1Img3,
      },
    ],
  },
};
