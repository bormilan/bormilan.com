export interface IPageJson {
  title: string;
  subtitle: string;
  component: string;
  iconName: string;
}

export interface IPage {
  title: string;
  headline: string;
  subtitle: string;
  iconName: string;
  sectionName: string;
  sectionOrder: string;
}

export interface ISection {
  headline: string;
  texts: string[];
  imageName?: string;
  onClick?: ISectionClick;
  stamps?: IStamp[];
  config?: ISectionConfig;
}

export interface ISectionClick {
  type: string;
  index: string;
}

export interface IStamp {
  type: string;
  text: string;
}

export interface ISectionConfig {
  wrap: "wrap" | "nowrap" | "mobile" | "fullscreen";
}
