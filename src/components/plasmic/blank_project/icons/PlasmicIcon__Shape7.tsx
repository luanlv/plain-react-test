// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape7Icon(props: Shape7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 4a4 4 0 108 0 4 4 0 00-8 0zm1.333 0a2.667 2.667 0 115.334 0 2.667 2.667 0 01-5.334 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape7Icon;
/* prettier-ignore-end */
