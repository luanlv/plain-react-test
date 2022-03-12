// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path73Icon(props: Path73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 25"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.6 19.129c-1.25-.67-.921-2.486-1.134-3.881C4.03 12.378.766 10.674 0 7.873a5.057 5.057 0 002.589-.365 3.901 3.901 0 00-.522-2.69C4.75 3.734 6.923 1.607 9.647.63c3.428-1.228 7.244-.474 10.701.668 1.725.57 3.52 1.31 4.563 2.79 1.145 1.625 1.128 3.764 1.066 5.747-.096 3.111-.22 6.334-1.613 9.121-1.774 3.549-6.797 6.836-10.947 5.875-1.726-.4-2.234-1.477-2.961-2.968-.453-.928-.623-2.005-1.642-2.488-.997-.472-2.204.295-3.215-.246z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path73Icon;
/* prettier-ignore-end */
