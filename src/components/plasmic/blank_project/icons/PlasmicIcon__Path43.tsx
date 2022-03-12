// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path43Icon(props: Path43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 6"}
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
          "M0 5.537L1.734 6C2.363 4.298 3.85 2.995 5.71 2.516c1.859-.48 3.852-.073 5.327 1.087L8.387 6H15V0l-2.665 2.384C10.399.8 7.74.23 5.258.864 2.776 1.497.8 3.253 0 5.537z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path43Icon;
/* prettier-ignore-end */
