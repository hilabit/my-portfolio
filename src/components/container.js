import React from "react";
import Header from "./header";
import sections from "./componentStructure";

const Container = () => (
  <div className="container">
    <Header text="My Portfolio" />
    {sections.map(section => {
      return (
        section.component && (
          <section.component
            key={section.href}
            id={section.href}
            {...section.props}
          />
        )
      );
    })}
  </div>
);

export default Container;
