// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path47Icon(props: Path47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 151 55"}
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
          "M65.906.639s-53.514 0-62.341 13.76C-5.262 28.16 1.91 47.427 29.495 51.83c27.584 4.404 111.442 6.606 118.062-9.907 6.621-16.514 1.656-25.871 1.656-25.871S120.524-3.765 65.907.639z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path47Icon;
/* prettier-ignore-end */
