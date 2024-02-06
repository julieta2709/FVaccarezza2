import React, { useState } from "react";
import "../../../styles/PrevNextButton.css";

function ButtonBefore(props) {
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
      {showMessage && <div className="messageNext">next project</div>}
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 170 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="svgButton"
      >
        <path
          d="M117.714 76.15c0 11.84-9.572 21.425-21.362 21.425S74.99 87.99 74.99 76.15s9.572-21.425 21.362-21.425 21.362 9.585 21.362 21.425z"
          fill="#F8F5EF"
          stroke="#3A3A39"
          strokeWidth={6}
        />
        <g filter="url(#filter0_d_313_536)">
          <ellipse
            cx={95.2054}
            cy={74.7126}
            rx={24.3617}
            ry={24.7126}
            className="ellipseBg"
            fill="#F8F5EF"
          />
          <path
            d="M117.567 74.713c0 12.57-10.038 22.712-22.362 22.712-12.323 0-22.361-10.141-22.361-22.712S82.882 52 95.205 52c12.324 0 22.362 10.142 22.362 22.713z"
            stroke="#3A3A39"
            strokeWidth={4}
          />
        </g>
        <path
          d="M86.894 66.667h5.156l4.642 14.072h-2.973l4.641-14.072h5.157l-5.612 16.092h-5.4l-5.611-16.092z"
          fill="#E52421"
          className="pathColorNext"
        />
        <defs>
          <filter
            id="filter0_d_313_536"
            x={0.84375}
            y={0}
            width={168.723}
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
              result="effect1_dropShadow_313_536"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_313_536"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default ButtonBefore;
