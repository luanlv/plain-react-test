// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape5Icon(props: Shape5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 103 20"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 20h103V0H0v20zm101.662-1.29H1.338V1.29h100.324v17.42z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape5Icon;
/* prettier-ignore-end */
