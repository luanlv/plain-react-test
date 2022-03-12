// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path49Icon(props: Path49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 10"}
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
        opacity={".1"}
        d={
          "M70 7.777C65.238 9.09 59.258 9.73 52.82 9.929c-11.233.348-23.878-.645-33.975-1.772C7.937 6.937 0 5.568 0 5.568 3.687 2.124 9.354.76 16.012.263 24.28-.355 34.08.352 43.543.048c3.49-.122 6.98.14 10.412.784C64.395 2.825 70 7.777 70 7.777z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path49Icon;
/* prettier-ignore-end */
