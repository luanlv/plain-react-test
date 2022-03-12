// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape11Icon(props: Shape11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
        d={
          "M0 8a8 8 0 008 8 8.009 8.009 0 008-8A8 8 0 100 8zm1.333 0A6.667 6.667 0 018 1.333 6.674 6.674 0 0114.667 8 6.667 6.667 0 011.333 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape11Icon;
/* prettier-ignore-end */
