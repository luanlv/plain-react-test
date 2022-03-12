// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path20Icon(props: Path20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 21"}
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
          "M8.675 20.977C7.295 21.639 1.88 7.842.744 5.525-.392 3.208-.209.829 1.17.167c1.38-.662 3.407.704 4.543 3 1.136 2.296 4.32 17.169 2.962 17.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path20Icon;
/* prettier-ignore-end */
