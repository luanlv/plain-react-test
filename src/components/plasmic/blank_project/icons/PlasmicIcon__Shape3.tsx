// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape3Icon(props: Shape3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 79 73"}
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
        d={"M0 73h78.054V0H0v73zm70.192-7.718H7.862V7.656h62.33v57.626z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */
