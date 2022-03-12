// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path34Icon(props: Path34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 180 245"}
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
          "M180 153.723C180 221.377 139.706 245 90 245S0 221.377 0 153.723C0 86.068 90 0 90 0s90 86.068 90 153.723z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path34Icon;
/* prettier-ignore-end */
