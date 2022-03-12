// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path114IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path114Icon(props: Path114IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 69"}
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
          "M49.18 0l-4.667 1.81L32.308 23.9 0 63.369s4.308 6.88 7.897 5.43c3.59-1.448 30.513-31.864 30.513-31.864L56 9.415 49.18 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path114Icon;
/* prettier-ignore-end */
