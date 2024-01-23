import React, { createContext, useContext, useState } from "react";

const context1 = createContext();
const context2 = createContext();

export const Con1 = () => {
  return useContext(context1);
};

export const Con2 = () => {
  return useContext(context2);
};

export function Variables({ children }) {
  const [login, setLogin] = useState("false");

  const hiFunction = () => {
    setLogin("interesting");
    console.log("working..");
  };

  return (
    <context1.Provider value={[login, setLogin]}>
      <context2.Provider value={hiFunction}>
        <div>Variables</div>
        {children}
      </context2.Provider>
    </context1.Provider>
  );
}
