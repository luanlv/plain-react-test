// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OvalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OvalIcon(props: OvalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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

      <path d={"M3 6a3 3 0 100-6 3 3 0 000 6z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default OvalIcon;
/* prettier-ignore-end */
