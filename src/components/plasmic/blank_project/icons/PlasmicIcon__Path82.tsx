// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path82Icon(props: Path82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 26"}
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
        d={"M14 2.08l-1.93 22.88L4.826 26 0 0l14 2.08z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path82Icon;
/* prettier-ignore-end */
