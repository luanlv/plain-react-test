// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape8Icon(props: Shape8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 166 283"}
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
        d={"M0 283h166V0H0v283zm164.656-1.344H1.344V1.344h163.312v280.312z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape8Icon;
/* prettier-ignore-end */
