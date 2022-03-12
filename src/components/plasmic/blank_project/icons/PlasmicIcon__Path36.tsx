// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path36Icon(props: Path36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 66"}
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
          "M49 41.411C49 59.636 38.031 66 24.5 66S0 59.636 0 41.411C0 23.186 24.5 0 24.5 0S49 23.186 49 41.411z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path36Icon;
/* prettier-ignore-end */
