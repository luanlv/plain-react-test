// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path107Icon(props: Path107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 26"}
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
          "M14.965.835s-9.13-2.56-10.11 1.285c0 0 3.528 10.134-1.37 12.559-4.899 2.425-5.101 12.006 2.42 11.282 7.521-.723 11.709-4.357 14.298-4.918 2.588-.562-1.955-9.113-1.955-9.113L14.965.835z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path107Icon;
/* prettier-ignore-end */
