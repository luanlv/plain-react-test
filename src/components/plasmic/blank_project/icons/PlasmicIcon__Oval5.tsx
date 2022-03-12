// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval5Icon(props: Oval5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
        d={"M4.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval5Icon;
/* prettier-ignore-end */
