import React from "react";

import { Con1 } from "./Variables";
import { Con2 } from "./Variables";

const Nav3 = () => {
  const [var1, var2] = Con1();
  const var3 = Con2();
  console.log(var3);
  const Hi = () => {
    var2("true");
  };

  return (
    <div>
      Nav3
      <button onClick={Hi}>change it</button>
      <button onClick={var3}>sds</button>
      <h4>{var1}</h4>
    </div>
  );
};

export default Nav3;
