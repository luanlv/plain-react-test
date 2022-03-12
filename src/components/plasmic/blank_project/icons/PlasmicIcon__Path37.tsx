// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path37Icon(props: Path37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 83"}
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
          "M9.588 63.501l.244-15.323L20 29.222 9.87 45.774l.11-6.89 7.008-13.714-6.979 11.892.198-12.392 7.503-10.92-7.473 8.97L10.362 0l-.776 30.079.063-1.24L2.02 16.937 9.527 31.22l-.71 13.84-.022-.368L0 32.168 8.768 45.99l-.088 1.73-.016.026.007.142L6.867 83h2.41l.289-18.136 8.748-13.787L9.588 63.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path37Icon;
/* prettier-ignore-end */
