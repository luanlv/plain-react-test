// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval12Icon(props: Oval12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 6"}
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
        d={"M1.5 6C2.328 6 3 4.657 3 3s-.672-3-1.5-3S0 1.343 0 3s.672 3 1.5 3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval12Icon;
/* prettier-ignore-end */
