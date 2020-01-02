/// <reference types="../../types">
import React from "react";

import { Link } from "react-router-dom";

import { Utils } from "../../utils";
import { Project } from "../../types";

import routes from "../../constants/routes";

const HomeContainer: React.FC<Project.ContainerProps> = ({
  customClasses,
  children
}) => {
  const classList = customClasses?.join(" ") || "";
  return <div className={`l-contentArea ${classList}`}>{children}</div>;
};

const HomeHeading: React.FC<Project.HeadingProps> = ({
  primaryContent,
  secondaryContent,
  customClasses,
  lang
}) => {
  if (lang) customClasses?.push(lang);
  const classList = customClasses?.join(" ") || "";
  return (
    <div className={`Home-heading ${classList}`}>
      <div className={`Home-heading-content`}>
        <h1> {primaryContent} </h1>
        <h3>{secondaryContent}</h3>
      </div>
    </div>
  );
};

const HomeContent: React.FC = props => {
  return (
    <div>
      <h2>Lorem ipsum dolor sit</h2>
      <p>
        amet consectetur adipisicing elit. Nemo sapiente repellendus delectus
        voluptatum rem! Molestias illum nam, facere reiciendis quis mollitia
        adipisci sunt ex delectus quas nulla velit hic unde?
      </p>

      <Link to={routes.PROFILE.SHOW.replace(":id", "11111")}>Show 111111</Link>
      <Link to={routes.PROFILE.FILTER.replace(":value", "testing testing")}>
        FILTER TEST
      </Link>
    </div>
  );
};

const HomePage: React.FC<Project.LocComponent> = props => {
  return (
    <HomeContainer customClasses={["Home"]}>
      <HomeHeading
        primaryContent={Utils.getLocaleString("home.heading.primary")}
        secondaryContent={Utils.getLocaleString("home.heading.secondary")}
        lang={props.lang}
      />

      <HomeContent />
      {props.children}
    </HomeContainer>
  );
};

export { HomeContainer, HomeHeading };
export default HomePage;
