// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path75Icon(props: Path75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 31"}
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
          "M16 29l-2.175-1.984C6.1 19.845 1 15.19 1 9.393a8.297 8.297 0 012.37-5.96 8.11 8.11 0 015.88-2.432A8.834 8.834 0 0116 4.205a8.834 8.834 0 016.75-3.204 8.11 8.11 0 015.878 2.433 8.297 8.297 0 012.37 5.959c0 5.798-5.099 10.452-12.823 17.623L16 29z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Path75Icon;
/* prettier-ignore-end */
