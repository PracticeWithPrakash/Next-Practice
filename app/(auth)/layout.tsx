import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      this is layout
      {children}
    </div>
  );
};

export default layout;
