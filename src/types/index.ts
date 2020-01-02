import { RouteComponentProps } from "react-router-dom";

export namespace Project {
  interface CustomClassComponent {
    customClasses?: string[];
  }

  export interface ContainerProps extends CustomClassComponent {}
  export interface HeadingProps extends CustomClassComponent {
    primaryContent: string;
    secondaryContent: string;
    lang?: string;
  }

  export interface LocComponent extends RouteComponentProps {
    lang?: string;
  }
}
