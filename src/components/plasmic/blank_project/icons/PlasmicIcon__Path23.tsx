// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path23Icon(props: Path23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 2"}
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
          "M0 1.13c0-.38.905-.7 2.001-.7 1.096 0 2.002.32 2.002.7 0 .38-.882.44-2.002.44C.881 1.57 0 1.53 0 1.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path23Icon;
/* prettier-ignore-end */
