export interface IPageJson {
  title: string;
  subtitle: string;
  component: string;
  iconName: string;
}

export interface IPage {
  title: string;
  subtitle: string;
  component: JSX.Element;
  icon: JSX.Element;
}

export interface ISection {
  headline: string;
  text: string;
  imageName: string;
}
