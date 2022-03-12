// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path87IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path87Icon(props: Path87IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 102"}
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
          "M18.264 0l-5.787 4.538S7.74 26.221 9.319 32.272c1.579 6.05-.526 11.598-.526 12.606 0 1.009-4.735 38.827-4.735 38.827s-9.471 20.17.526 18.153c9.997-2.017 6.314-22.187 6.314-22.187L23 44.374v-29.75L18.264 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path87Icon;
/* prettier-ignore-end */
