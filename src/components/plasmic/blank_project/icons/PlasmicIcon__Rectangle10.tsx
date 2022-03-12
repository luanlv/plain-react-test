// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle10Icon(props: Rectangle10IconProps) {
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
        d={"M0 0l32.206.02.033 51.814-32.206-.02L0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle10Icon;
/* prettier-ignore-end */
