// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path93Icon(props: Path93IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
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
          "M0 10.121L15.212 17 18 10.859a14.535 14.535 0 00-2.935-6.127L4.595 0 0 10.121z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path93Icon;
/* prettier-ignore-end */
