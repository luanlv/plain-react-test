// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path42Icon(props: Path42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
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
          "M6 11l-.87-.78C2.04 7.404 0 5.576 0 3.298A3.229 3.229 0 01.95.956 3.274 3.274 0 013.3 0 3.559 3.559 0 016 1.26 3.559 3.559 0 018.7 0c.881-.01 1.73.335 2.351.956.622.621.964 1.466.948 2.341 0 2.278-2.04 4.106-5.129 6.924L6 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path42Icon;
/* prettier-ignore-end */
