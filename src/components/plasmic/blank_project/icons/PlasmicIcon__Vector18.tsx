// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M5.625 11.25a5.625 5.625 0 110-11.25 5.625 5.625 0 010 11.25zM12.188 15a2.813 2.813 0 110-5.625 2.813 2.813 0 010 5.625zM1.874 15a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zm11.25-11.25a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zm.938 2.813a.937.937 0 110-1.875.937.937 0 010 1.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
