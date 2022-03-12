// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle12Icon(props: Rectangle12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 52"}
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
        d={"M0 0l32.121.02.033 51.678-32.12-.021L0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle12Icon;
/* prettier-ignore-end */
