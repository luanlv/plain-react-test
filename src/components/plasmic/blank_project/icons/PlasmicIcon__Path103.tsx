// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path103Icon(props: Path103IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 156"}
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

      <path d={"M1.205 156V0z"} fill={"currentColor"}></path>

      <path d={"M1.205 156V0"} stroke={"currentColor"} strokeWidth={"2"}></path>
    </svg>
  );
}

export default Path103Icon;
/* prettier-ignore-end */
