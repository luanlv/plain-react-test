// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path19Icon(props: Path19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 64"}
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
          "M39.887 52.672C39.628 54.777 30.713 64 20.568 64S2.048 55.578.278 52.208C-1.493 48.84 5.63 5.505 9.753 1.884c4.122-3.622 20.83-1.243 22.233.674 3.367 4.527 9.001 41.712 7.9 50.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path19Icon;
/* prettier-ignore-end */
