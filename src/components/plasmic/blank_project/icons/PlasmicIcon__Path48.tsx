// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path48Icon(props: Path48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 128"}
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
          "M19.606 116.985L49 128s12.201-8.812 6.1-18.725c-6.1-9.913-33.831-67.19-33.831-67.19s-7.765-11.014 2.218-17.072 13.865 3.855 13.865 3.855-.554 2.203 3.328.55c3.883-1.652 11.093 3.856 7.21 12.667-3.882 8.812-6.655 11.015 1.664 10.464 3.004-.199 5.647-2.336 7.797-4.987 4.122-5.08 2.282-9.172 1.97-15.689-.534-11.163-1.408-18.442-4.22-22.832-3.883-6.058-9.43-11.014-23.85-8.26C16.833 3.533-4.242 17.301.75 37.128c4.99 19.827 16.083 41.857 16.083 41.857s7.764 30.841 2.773 38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path48Icon;
/* prettier-ignore-end */
