// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path81Icon(props: Path81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 40"}
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
          "M0 23.904l2.998 1.626 10.2 5.536L29.665 40l9.597-17.93a14.653 14.653 0 001.13-11.1 14.541 14.541 0 00-7.005-8.647A19.108 19.108 0 0010.96 5.388l-.005.005a19.35 19.35 0 00-3.612 4.786L0 23.904z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path81Icon;
/* prettier-ignore-end */
