// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path10Icon(props: Path10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 149"}
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
          "M21.015 26.15V149H0V26.15c0-4.54 2.818-8.58 7.018-10.061V3.825C7.018 1.712 8.694 0 10.762 0c2.067 0 3.743 1.712 3.743 3.825v12.472c3.919 1.638 6.488 5.526 6.51 9.853z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path10Icon;
/* prettier-ignore-end */
