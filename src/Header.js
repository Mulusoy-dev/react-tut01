import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Default Props, varsayılan olarak değer atar.
Header.defaultProps = {
  title: "No list",
};

export default Header;
