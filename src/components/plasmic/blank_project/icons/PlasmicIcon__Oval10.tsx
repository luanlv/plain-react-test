// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval10Icon(props: Oval10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 37"}
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
          "M18.5 37C28.717 37 37 28.717 37 18.5S28.717 0 18.5 0 0 8.283 0 18.5 8.283 37 18.5 37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval10Icon;
/* prettier-ignore-end */
