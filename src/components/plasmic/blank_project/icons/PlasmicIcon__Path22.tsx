// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path22Icon(props: Path22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 25"}
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
          "M2.995 0h21.763l3.261 20.622C16.164 27.005 9.251 26.3 0 19.214L2.995 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path22Icon;
/* prettier-ignore-end */
