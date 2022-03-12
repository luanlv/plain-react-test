// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path45Icon(props: Path45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 49"}
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
          "M17.555.45A21.952 21.952 0 003.634 9.96 22.369 22.369 0 00.446 26.63L4.977 49l5.074-1.049.358-2.37 1.063 2.076 30.846-6.377.358-2.37 1.063 2.077L48 40.106l-4.532-22.371A22.19 22.19 0 0034.055 3.67a21.774 21.774 0 00-16.5-3.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path45Icon;
/* prettier-ignore-end */
