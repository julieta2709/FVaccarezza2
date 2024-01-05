import React from "react";
function Rectangle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="1080"
      fill="none"
      viewBox="0 0 80 1080"
    >
      <g filter="url(#filter0_b_337_714)">
        <path
          fill="#E52421"
          d="M0 1080H1080V1160H0z"
          transform="rotate(-90 0 1080)"
        ></path>
      </g>
      <path
        fill="#F5F5F5"
        d="M48.707 527.568v7.756l-21.109 6.98v-4.471l21.109 6.98v7.755l-24.138-8.439v-8.121l24.138-8.44z"
      ></path>
      <defs>
        <filter
          id="filter0_b_337_714"
          width="88"
          height="1088"
          x="-4"
          y="-4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="2"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_337_714"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_337_714"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle;
