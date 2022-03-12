// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path74Icon(props: Path74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 28"}
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
          "M15 28l-2.175-1.984C5.1 18.845 0 14.19 0 8.393a8.297 8.297 0 012.37-5.96A8.11 8.11 0 018.252.002 8.834 8.834 0 0115 3.205 8.834 8.834 0 0121.75.001a8.11 8.11 0 015.878 2.433 8.297 8.297 0 012.37 5.959c0 5.798-5.099 10.452-12.823 17.623L15 28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path74Icon;
/* prettier-ignore-end */
