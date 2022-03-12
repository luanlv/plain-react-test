// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path111Icon(props: Path111IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 17"}
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
          "M19.937 0S-4.316 12.838.677 16.506C5.671 20.174 26 2.201 26 2.201L19.937 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path111Icon;
/* prettier-ignore-end */
