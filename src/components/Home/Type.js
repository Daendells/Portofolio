import React from "react";
import Typewriter from "typewriter-effect";

import { USERS } from "../../Constants";

function Type() {
  return (
    <Typewriter
      options={{
        strings: USERS.titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
