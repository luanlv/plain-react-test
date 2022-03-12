// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path26Icon(props: Path26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 105 142"}
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
          "M14.882 3.954A20.653 20.653 0 005.257 7.28C.319 11.171-.056 18.43.027 24.748a148.472 148.472 0 001.813 26.15c1.48 7.928 4.167 15.543 6.375 23.304a151.493 151.493 0 015.438 38.764c0 7.196-.125 15.104 4.354 20.731 4.896 6.109 13.563 7.301 21.355 7.741 11.063.648 22.167.732 33.23.271 7.417-.334 15.313-1.066 21.188-5.627 4.688-3.64 15.667-126.794 7.146-129.91-8.52-3.118-17.688-3.913-26.73-4.666C53.925-.209 34.841-1.569 14.882 3.954z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path26Icon;
/* prettier-ignore-end */
