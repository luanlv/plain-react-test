// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path88Icon(props: Path88IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 99"}
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
          "M2.046 0l4.09 3 2.047 41.995 15.342 35.997S34.776 98.49 27.616 98.99c-7.16.5-11.762-17.998-11.762-17.998L2.046 46.495 0 13 2.046 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path88Icon;
/* prettier-ignore-end */
