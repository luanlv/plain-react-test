// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path17Icon(props: Path17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 12"}
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
          "M6.771 6.148C6.386 2.163 4.503 0 2.664 0 .824 0-.31 2.12.075 6.148.162 9.122 2.406 11.597 5.381 12c1.86 0 1.797-1.866 1.39-5.852z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path17Icon;
/* prettier-ignore-end */
