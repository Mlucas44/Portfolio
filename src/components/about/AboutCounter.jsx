import Slider from "react-infinite-logo-slider";
import react from "../../images/bio/react.png";
import php from "../../images/bio/php.png";
import html from "../../images/bio/html.png";
import css from "../../images/bio/css.png";
import js from "../../images/bio/js.png";
import c from "../../images/bio/c.png";
import symfony from "../../images/bio/symfony.png";
import vue from "../../images/bio/vue.png";
import boostrap from "../../images/bio/boostrap.png";
import strapi from "../../images/bio/strapi.png";
import appwrite from "../../images/bio/appwrite.png";
import wordpress from "../../images/bio/wordpress.png";
import mysql from "../../images/bio/mysql.png";
import graphql from "../../images/bio/graphql.png";
import mango from "../../images/bio/mango.png";
import postgresql from "../../images/bio/postgresql.png";
import github from "../../images/bio/github.png";
import docker from "../../images/bio/docker.png";
import vscode from "../../images/bio/vscode.png";
import java from "../../images/bio/java.png";
import node from "../../images/bio/node.png";

const AboutCounter = () => {
  const logos = [
    { src: html, alt: "html" },
    { src: css, alt: "css" },
    { src: js, alt: "js" },
    { src: php, alt: "php" },
    { src: c, alt: "c" },
    { src: java, alt: "java" },
    { src: symfony, alt: "symfony" },
    { src: react, alt: "react" },
    { src: vue, alt: "vue" },
    { src: boostrap, alt: "boostrap" },
    { src: node, alt: "node" },
    { src: mysql, alt: "mysql" },
    { src: mango, alt: "mango" },
    { src: graphql, alt: "graphql" },
    { src: postgresql, alt: "postgresql" },
    { src: docker, alt: "docker" },
    { src: github, alt: "github" },
    { src: wordpress, alt: "wordpress" },
    { src: strapi, alt: "strapi" },
    { src: appwrite, alt: "appwrite" },
    { src: vscode, alt: "vscode" },
  ];
  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:justify-between items-center">
        <Slider
          width="250px"
          duration={40}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {logos.map((logo, index) => (
            <Slider.Slide key={index}>
              <img src={logo.src} alt={logo.alt} className="w-36" />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutCounter;
