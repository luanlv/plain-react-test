// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path84Icon(props: Path84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 26"}
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
        d={"M0 2.08l1.931 22.88L9.173 26 14 0 0 2.08z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path84Icon;
/* prettier-ignore-end */
