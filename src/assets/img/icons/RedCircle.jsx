import * as React from "react";
export default function RedCircle(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{ width: "71px", height: "71px" }}
      >
        <circle cx={35.5} cy={35.5} r={35.5} />
      </svg>
    </div>
  );
}
