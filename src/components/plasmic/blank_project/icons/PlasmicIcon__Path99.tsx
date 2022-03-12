// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path99Icon(props: Path99IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 211"}
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
          "M82.883 107.281C80.355 165.547 36.922 211 36.922 211S-2.412 161.985.117 103.719C2.645 45.453 46.078 0 46.078 0s39.334 49.015 36.805 107.281z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path99Icon;
/* prettier-ignore-end */
