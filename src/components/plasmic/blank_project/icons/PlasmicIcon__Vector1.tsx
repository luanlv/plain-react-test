// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1Icon(props: Vector1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 7"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 4.772c.817-1.633 2.817-4.41 4.287-2.45 1.838 2.45 2.757 2.757 3.676.92.735-1.47 1.735.408 2.143 1.53.306 1.43 1.164 3.124 2.144-1.53 1.225-5.82 1.531 1.53 2.45 1.53.919 0 1.225-2.45 2.45-2.45s2.45 3.063 3.369 0"
        }
        stroke={"currentColor"}
        strokeWidth={".613"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
