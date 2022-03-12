// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path101IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path101Icon(props: Path101IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 56"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1.205 56V0z"} fill={"currentColor"}></path>

      <path d={"M1.205 56V0"} stroke={"currentColor"} strokeWidth={"2"}></path>
    </svg>
  );
}

export default Path101Icon;
/* prettier-ignore-end */
