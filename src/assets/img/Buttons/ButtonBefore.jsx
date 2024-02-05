import React, { useState } from "react";
import "../../../styles/PrevNextButton.css";

function ButtonNext(props) {

  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div className="NextContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {showMessage && <div className="messagePrev">previous project</div>}
      <svg
        width={"100%"}
        height={"auto"}
        viewBox="0 0 169 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="svgButton"
      >
        <circle
          cx={95.5747}
          cy={76.1499}
          r={21.4253}
          fill="#F8F5EF"
          stroke="#3A3A39"
          strokeWidth={6}
        />
        <g filter="url(#filter0_d_313_535)">
          <ellipse
          className="ellipseBg"
            cx={94.4253}
            cy={74.7126}
            rx={24.4253}
            ry={24.7126}
            fill="#F8F5EF"
          />
          <path
            d="M116.851 74.713c0 12.566-10.063 22.712-22.426 22.712C82.062 97.425 72 87.28 72 74.713 72 62.147 82.062 52 94.425 52c12.363 0 22.426 10.147 22.426 22.713z"
            stroke="#3A3A39"
            strokeWidth={4}
          />
        </g>
        <path
          d="M102.758 82.759h-5.17l-4.653-14.073h2.98L91.262 82.76h-5.17l5.626-16.092h5.414l5.626 16.092z"
          fill="#E52421"
          className="pathColorPrev"
        />
        <defs>
          <filter
            id="filter0_d_313_535"
            x={0}
            y={0}
            width={168.851}
            height={169.425}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={-10} dy={10} />
            <feGaussianBlur stdDeviation={30} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_313_535"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_313_535"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default ButtonNext;
