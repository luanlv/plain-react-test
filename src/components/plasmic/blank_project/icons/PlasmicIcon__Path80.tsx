// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path80Icon(props: Path80IconProps) {
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
        opacity={".1"}
        d={
          "M12 4.125c0 2.9-1.765 5.487-4.41 6.469-2.647.981-5.605.145-7.397-2.09l-.006-.007A7.24 7.24 0 010 6.875c0-2.9 1.765-5.487 4.41-6.469 2.647-.981 5.605-.145 7.397 2.09 0 .002 0 .003.002.005a.006.006 0 00.004.002c.123.531.186 1.076.187 1.622z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path80Icon;
/* prettier-ignore-end */
