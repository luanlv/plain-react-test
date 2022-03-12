// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval4Icon(props: Oval4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
        d={"M8.5 17a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval4Icon;
/* prettier-ignore-end */
