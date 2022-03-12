// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path96Icon(props: Path96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 135 162"}
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
          "M134.991 162s-.776-.123-2.205-.411a144.21 144.21 0 01-4.626-1.011c-17.131-4.02-62.675-17.609-92.452-53.337C-1.56 62.503.01 0 .01 0s56.985 9.216 94.534 49.39a114.483 114.483 0 014.75 5.369c32.427 38.926 35.45 91.301 35.69 104.249.033 1.94.008 2.992.008 2.992z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path96Icon;
/* prettier-ignore-end */
