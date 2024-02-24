//@ts-ignore
import info from "./images/info.png";
//@ts-ignore
import image from "./images/image.png";
//@ts-ignore
import list from "./images/list.png";
//@ts-ignore
import house from "./images/house.png";
//@ts-ignore
import folder from "./images/folder.png";
//@ts-ignore
import message from "./images/message.png";
//@ts-ignore
import placeholder_img from "./images/placeholder.jpg";
//@ts-ignore
import tkProfilePicture from "./images/profil-processed.jpeg";
//@ts-ignore
import projects from "./images/projects.png";
//@ts-ignore
import fields from "./images/fields.png";
//@ts-ignore
import posts from "./images/posts.png";
//@ts-ignore
import bme from "./images/bme.png";
//@ts-ignore
import profile from "./images/profile.jpg";
//@ts-ignore
import cv from "./images/cv.png";
//@ts-ignore
import webdev from "./images/webdev.png";
//@ts-ignore
import seeger from "./images/seeger.png";
//@ts-ignore
import cm_img from "./images/cm_img.png";
//@ts-ignore
import marminalunk from "./images/marminalunk.png";
//@ts-ignore
import dd1 from "./images/dd1.png";
//@ts-ignore
import drowning_cover from "./images/drowning_cover.png";
//@ts-ignore
import react_markdown_cover from "./images/react_markdown_cover.png";
//@ts-ignore
import beam_img from "./images/beam_img.png";

import homeSectionsJson from "./data/home_sections.json";
import aboutSectionsJson from "./data/about_sections.json";
import projectsJson from "./data/projects.json";
import fieldsJson from "./data/fields.json";
import postsJson from "./data/posts.json";

export const textColor = "#e5e5e5";

const iconComponents: { [name: string]: JSX.Element } = {
  info: <img src={info} height="100%" />,
  placeHolderIcon: <img src={image} height="100%" />,
  list: <img src={list} height="100%" />,
  house: <img src={house} height="100%" />,
  folder: <img src={folder} height="100%" />,
  message: <img src={message} height="100%" />,
};

export function getIconByName(name: string) {
  return name != "" ? iconComponents[name] : iconComponents["placeHolderIcon"];
}

const imageComponents: { [name: string]: any } = {
  placeHolderImage: <img src={placeholder_img} height="100%" />,
  tkProfilePicture: <img src={tkProfilePicture} height="100%" />,
  projects: <img src={projects} height="100%" />,
  fields: <img src={fields} height="100%" />,
  posts: <img src={posts} height="100%" />,
  bme: <img src={bme} height="100%" />,
  profile: <img src={profile} height="100%" />,
  cv: <img src={cv} height="100%" />,
  webdev: <img src={webdev} height="100%" />,
  seeger: <img src={seeger} height="100%" />,
  cm_img: <img src={cm_img} height="100%" />,
  marminalunk: <img src={marminalunk} height="100%" />,
  dd1: <img src={dd1} height="100%" />,
  drowning_cover: <img src={drowning_cover} height="100%" />,
  react_markdown_cover: <img src={react_markdown_cover} height="100%" />,
  beam_img: <img src={beam_img} height="100%" />,
};

export function getImageByName(name: string) {
  return name != "-"
    ? imageComponents[name]
    : imageComponents["placeHolderImage"];
}

const sections: { [name: string]: any } = {
  home_sections: homeSectionsJson,
  about_sections: aboutSectionsJson,
  projects: projectsJson,
  fields: fieldsJson,
  posts: postsJson,
};

export function getSection(name: string) {
  return sections[name];
}
