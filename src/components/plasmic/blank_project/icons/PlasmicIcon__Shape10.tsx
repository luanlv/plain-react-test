// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape10Icon(props: Shape10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 18"}
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
        d={"M0 18h85V0H0v18zm83.65-1.286H1.35V1.286h82.3v15.428z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape10Icon;
/* prettier-ignore-end */
