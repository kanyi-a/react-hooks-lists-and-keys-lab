import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tags = links.map((link) => (
    <a key={link} href={"#" + link }>{link}</a>
  ))
  return (<nav>{tags}</nav>)
  }
export default NavBar;
