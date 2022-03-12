// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path79Icon(props: Path79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M13 6.5a6.5 6.5 0 01-11.51 4.14l-.006-.006A6.5 6.5 0 017.368.059a6.499 6.499 0 015.445 4.905.006.006 0 00.005.002c.12.502.181 1.017.182 1.534z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path79Icon;
/* prettier-ignore-end */
