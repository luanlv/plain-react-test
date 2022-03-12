// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5895IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5895Icon(props: Group5895IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M10.833 15h-7.5a.833.833 0 110-1.667h7.5a2.5 2.5 0 002.5-2.5v-7.5a.833.833 0 111.667 0v7.5A4.172 4.172 0 0110.833 15z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.167 0H2.5A2.508 2.508 0 000 2.5v6.667a2.507 2.507 0 002.5 2.5h6.667a2.507 2.507 0 002.5-2.5V2.5a2.507 2.507 0 00-2.5-2.5zM7.5 6.667h-.833V7.5A.833.833 0 015 7.5v-.833h-.833a.833.833 0 110-1.667H5v-.833a.833.833 0 111.667 0V5H7.5a.833.833 0 010 1.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5895Icon;
/* prettier-ignore-end */
