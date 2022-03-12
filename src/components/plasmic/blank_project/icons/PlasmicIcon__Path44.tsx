// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path44Icon(props: Path44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 10"}
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
          "M11 10L9.156 6.713c.912-2.23.073-4.803-1.967-6.035a4.703 4.703 0 00-6.143 1.138 4.916 4.916 0 00.246 6.354 4.698 4.698 0 006.211.643L11 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path44Icon;
/* prettier-ignore-end */
