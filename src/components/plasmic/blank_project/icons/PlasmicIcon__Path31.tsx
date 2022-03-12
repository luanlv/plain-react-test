// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path31Icon(props: Path31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 63"}
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
          "M72.05 49.859s-45.49 20.38-63.974 10.38C-10.409 50.236 8.622 0 8.622 0l12.38 4.202S10.656 29.815 22.49 33.617C34.325 37.42 69.784 12.44 69.784 12.44l2.266 37.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path31Icon;
/* prettier-ignore-end */
