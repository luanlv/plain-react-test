// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path78Icon(props: Path78IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
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
        d={"M54 0v54C24.177 53.999.001 29.823 0 0h54z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path78Icon;
/* prettier-ignore-end */
