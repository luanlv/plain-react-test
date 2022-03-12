// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path46Icon(props: Path46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 24"}
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
        d={"M1.647 0L28 16.186 24.706 24 0 12.28 1.647 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path46Icon;
/* prettier-ignore-end */
