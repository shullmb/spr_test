import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  useLocation,
  Route,
  NavLink
} from "react-router-dom";

import { animated, useTransition } from "react-spring";

// layouts
import { Header, Footer, Main } from "./components/layout";

import HomePage from "./components/home";
import { Profile } from "./components/profile";
import routes from "./constants/routes";
import { Utils } from "./utils";
import { LanguageSelector } from "./components/LanguageSelector";

const App: React.FC = props => {
  const [lang, setLang] = useState(Utils.getCurrentLanguage());

  useEffect(() => Utils.setLanguage(lang), [lang]);

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      <Header>
        <NavLink to={routes.HOME}>HOME</NavLink>
        <NavLink activeClassName={"is-active"} to={routes.PROFILE.LANDING}>
          PROFILE
        </NavLink>
        <LanguageSelector setLang={setLang} />
      </Header>
      <Main>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route
                exact
                path={routes.HOME}
                render={props => <HomePage {...props} lang={lang} />}
              />
              <Route
                exact
                path={[
                  routes.PROFILE.LANDING,
                  routes.PROFILE.FILTER,
                  routes.PROFILE.SHOW
                ]}
                render={props => <Profile {...props} lang={lang} />}
              />
            </Switch>
          </animated.div>
        ))}
      </Main>
      <Footer />
    </div>
  );

  // return (
  //   <>
  //       <Header>
  //         <NavLink to={routes.HOME}>HOME</NavLink>
  //         <NavLink activeClassName={"is-active"} to={routes.PROFILE.LANDING}>
  //           PROFILE
  //         </NavLink>
  //         <LanguageSelector setLang={setLang} />
  //       </Header>
  //       <Main>
  //         <Switch location={location}>
  //           <Route
  //             exact
  //             path={routes.HOME}
  //             render={props => <HomePage {...props} lang={lang} />}
  //           />
  //           <Route
  //             exact
  //             path={[
  //               routes.PROFILE.LANDING,
  //               routes.PROFILE.FILTER,
  //               routes.PROFILE.SHOW
  //             ]}
  //             render={props => <Profile {...props} lang={lang} />}
  //           />
  //         </Switch>
  //       </Main>
  //       <Footer />

  //   </>
  // );
};

export default App;

// {
//   /* <Route
//   exact
//   path={routes.PROFILE.LANDING}
//   render={props => <Profile {...props} lang={lang} />}
// /> */
// }
// {
//   /* <Route
//   exact
//   path={routes.PROFILE.SHOW}
//   render={props => <Profile {...props} />}
// />
// <Route
//   exact
//   path={routes.PROFILE.FILTER}
//   render={props => <Profile {...props} />}
// /> */
// }
// {
//   /* <Route
//   path={[routes.PROFILE.FILTER, routes.PROFILE.SHOW]}
//   render={props => <Profile {...props} lang={lang} />}
// /> */
// }
