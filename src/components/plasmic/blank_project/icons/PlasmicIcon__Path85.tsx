// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path85Icon(props: Path85IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 29"}
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
          "M21.648 2.618s-9.575-5.132-11.591-1.026c0 0 1.512 12.316-4.536 13.856-6.048 1.54-8.568 12.316 0 13.343 8.567 1.026 14.111-2.053 17.135-2.053 3.024 0 0-10.777 0-10.777L21.648 2.618z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path85Icon;
/* prettier-ignore-end */
