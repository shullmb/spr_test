import React from "react";

export const Header: React.FC = ({ children }) => (
  <header className="l-navArea">{children}</header>
);

export const Main: React.FC = ({ children }) => (
  <main className="l-contentArea">{children}</main>
);

export const Footer: React.FC = ({ children }) => (
  <footer className="l-navArea">{children}</footer>
);

export default { Header, Footer, Main };
