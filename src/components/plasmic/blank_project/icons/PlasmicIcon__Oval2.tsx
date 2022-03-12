// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval2Icon(props: Oval2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
        d={"M7.5 15a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval2Icon;
/* prettier-ignore-end */
