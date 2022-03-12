// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval13Icon(props: Oval13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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

      <path d={"M7 14A7 7 0 107 0a7 7 0 000 14z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Oval13Icon;
/* prettier-ignore-end */
