import * as React from "react";
import { useHistory } from "react-router-dom";

export function Notfound() {
  const history = useHistory();
  return (
    <div className="notfound">
      <img
        onClick={() => history.push("/")}
        src="https://cdn.dribbble.com/users/447357/screenshots/2816714/404-800.gif"
        alt="404"
      />
    </div>
  );
}
