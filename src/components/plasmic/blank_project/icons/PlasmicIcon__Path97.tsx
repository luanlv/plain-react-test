// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path97Icon(props: Path97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 119 181"}
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
        clipRule={"evenodd"}
        d={
          "M93.892 67.957C125.599 116.834 116.91 179 116.91 179s-60.095-17.08-91.803-65.957C-6.599 64.165 2.088 2 2.088 2s60.096 17.08 91.804 65.957z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Path97Icon;
/* prettier-ignore-end */
