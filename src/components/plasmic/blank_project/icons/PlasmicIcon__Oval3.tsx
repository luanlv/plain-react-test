// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval3Icon(props: Oval3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
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
          "M15.5 31C24.06 31 31 24.06 31 15.5 31 6.94 24.06 0 15.5 0 6.94 0 0 6.94 0 15.5 0 24.06 6.94 31 15.5 31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval3Icon;
/* prettier-ignore-end */
