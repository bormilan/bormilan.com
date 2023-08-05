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
import placeholder_img from "./images/placeholder.jpeg";
//@ts-ignore
import tkProfilePicture from "./images/ipartk-340.png";
//@ts-ignore
import projects from "./images/projects.png";
//@ts-ignore
import fields from "./images/fields.png";
//@ts-ignore
import posts from "./images/posts.png";

import Home from "./components/Pages/Home";
import AboutMe from "./components/Pages/AboutMe";
import Projects from "./components/Pages/Projects";
import Fields from "./components/Pages/Fields";
import Posts from "./components/Pages/Posts";

export const iconComponents: { [name: string]: JSX.Element } = {
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

export const imageComponents: { [name: string]: any } = {
  placeHolderImage: <img src={placeholder_img} height="100%" />,
  tkProfilePicture: <img src={tkProfilePicture} height="100%" />,
  projects: <img src={projects} height="100%" />,
  fields: <img src={fields} height="100%" />,
  posts: <img src={posts} height="100%" />,
};

export function getImageByName(name: string) {
  return name != ""
    ? imageComponents[name]
    : imageComponents["placeHolderImage"];
}

export const pageComponents: { [name: string]: any } = {
  placeHolderPage: <Home />,
  home: <Home />,
  aboutMe: <AboutMe />,
  projects: <Projects />,
  fields: <Fields />,
  posts: <Posts />,
};

export function getPageByName(name: string) {
  return name != "" ? pageComponents[name] : pageComponents["placeHolderPage"];
}
