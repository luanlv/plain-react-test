// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval8Icon(props: Oval8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
        d={"M6.5 13a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval8Icon;
/* prettier-ignore-end */
