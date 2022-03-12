// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle9Icon(props: Rectangle9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 264 77"}
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
        d={"M0 0l262.962.17.05 76.77L.049 76.773 0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle9Icon;
/* prettier-ignore-end */
