// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path28Icon(props: Path28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 21"}
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
          "M2.378 10.024a6.525 6.525 0 00-2.252 3.001 4.607 4.607 0 00.271 2.94 8.573 8.573 0 005.984 4.585c2.577.49 5.215.58 7.82.267l8.34-.555a23.335 23.335 0 006.256-1.007 7.663 7.663 0 004.629-3.947c.491-1.392.683-2.87.563-4.339 0-6.805-2.419-12.335-9.967-10.67a50.02 50.02 0 00-21.644 9.725z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path28Icon;
/* prettier-ignore-end */
