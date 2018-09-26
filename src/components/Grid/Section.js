import React from "react";

// <Section id="id"></Section
export const Section = ({ id, children }) => (
  <div className="section" id={id}>
    {children}
  </div>
);
