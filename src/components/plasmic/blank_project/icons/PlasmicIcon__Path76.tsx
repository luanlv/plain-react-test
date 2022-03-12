// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path76Icon(props: Path76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 142 126"}
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
        d={"M100.187 126L142 59.878 48.359 0 0 76.473 77.453 126h22.734z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path76Icon;
/* prettier-ignore-end */
