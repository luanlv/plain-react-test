// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path30Icon(props: Path30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 126"}
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
          "M0 0s32.716 19.163 42.541 43.389C52.367 67.614 10.361 126 10.361 126l-8.988-9.186S23.298 72.759 19.908 61.74C16.518 50.72 3.24 40.452 3.24 40.452L0 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path30Icon;
/* prettier-ignore-end */
