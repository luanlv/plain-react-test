// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path90Icon(props: Path90IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 19"}
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
        d={"M0 .352L8.08 19 10 17.993 1.642 0 0 .352z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path90Icon;
/* prettier-ignore-end */
