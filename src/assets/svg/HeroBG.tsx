import * as React from "react";

const HeroBG: React.FC<React.SVGProps<SVGElement>> = ( ) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1561"
    height="759"
    fill="none"
  >
    <mask
      id="b"
      width="1561"
      height="759"
      x="0"
      y="0"
      fill="#000"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M0 0h1561v759H0z"></path>
      <path d="M1 0h1559v758H1z"></path>
    </mask>
    <path fill="url(#a)" fillOpacity="0.5" d="M1 0h1559v758H1z"></path>
    <path
      fill="#262626"
      d="M1560 758v1h1v-1zM1 758H0v1h1zM1559 0v758h2V0zm1 757H1v2h1559zM2 758V0H0v758z"
      mask="url(#b)"
    ></path>
    <defs>
      <pattern
        id="a"
        width="0.021"
        height="0.042"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00064 .00132)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA5klEQVR42u1WMQ7CMBA7KQNbt27Z2DpmY+MRuY2NrS/Kc4mlng5FIGE6AOIsWbfU7jWtaktHuWcSOfW5yItIImfpGtNtswgBu+GxM2OCqnoh9Bk0D0qfzGAgDEj9zOkdxTd3I+0g9KYDJ0zuBHyByUxgwCww6PO7r2A2Egss0BrpBQBc/IBK6LXWet24mof8NVprBwkEAj8Oz3vrCUYy74tAN5DuC2zejw8wdI5MpyXZF/xP+KRvIDeII9xVOMqYmDvi2iP7gwu4Af0NeWOCXqm+gHeGCVr+79FjRmxG44kKFSfzFbgB2H9a/oMniUIAAAAASUVORK5CYII="
        id="c"
        width="32"
        height="32"
      ></image>
    </defs>
  </svg>
);

export default HeroBG;
