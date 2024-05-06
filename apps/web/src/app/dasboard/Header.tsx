import React from "react";

type title = {
  title: string;
};

export const Header = ({ title }: title) => {
  return (
    <nav className="px-12 pb-4 pt-8">
      <div className="font-sans  text-4xl font-medium">{title}</div>
    </nav>
  );
};
