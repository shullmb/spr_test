import React from "react";

import { HomeContainer, HomeHeading } from "../home";

import { useParams, useLocation, Link } from "react-router-dom";
import { Utils } from "../../utils";
import { Project } from "../../types";

import routes from "../../constants/routes";

export const Profile: React.FC<Project.LocComponent> = props => {
  // let { params } = props.match;
  // console.log({ props });
  // let content = matchParams(params);
  let { id } = useParams();
  //@ts-ignore
  let filter = useQuery();

  let params = { id, filter };
  console.log(params);
  let content = matchParams({ id, filter });
  return (
    <HomeContainer customClasses={["Home", "Profile"]}>
      <HomeHeading
        primaryContent={Utils.getLocaleString("profile.heading.primary")}
        secondaryContent={Utils.getLocaleString("profile.heading.secondary")}
        lang={props.lang}
      />
      <div
        style={{
          padding: "1em",
          marginTop: "1em",
          border: "1px dotted darkgray",
          height: "100%"
        }}
      >
        {content}
        <br />
        <div className="Profile-content">
          <div className="Profile-link-container">
            <Link
              to={routes.PROFILE.SHOW.replace(":id", "11111")}
              className="Profile-link"
            >
              Show 111111
            </Link>
            <Link
              to={routes.PROFILE.FILTER.replace(":value", "testing testing")}
              className="Profile-link"
            >
              FILTER TEST
            </Link>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

interface IProfileParams {
  filter?: URLSearchParams;
  id?: string;
}

function useQuery(): URLSearchParams {
  let filter = new URLSearchParams(useLocation().search);
  console.log({ filter });
  return filter;
}

function matchParams(params: IProfileParams) {
  console.log("matching params", params);
  switch (true) {
    case params.filter && (params.filter as URLSearchParams).has("filter"):
      console.log(params.filter);
      return <>filter: {(params.filter as URLSearchParams).get("filter")}</>;
    case !!params.id:
      return <>id: {params.id}</>;
    default:
      return <>Landing!</>;
  }
}
