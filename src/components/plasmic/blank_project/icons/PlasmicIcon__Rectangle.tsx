// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangleIcon(props: RectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 263 77"}
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
        d={"M0 0l262.819.137.04 76.813L.04 76.813 0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RectangleIcon;
/* prettier-ignore-end */
