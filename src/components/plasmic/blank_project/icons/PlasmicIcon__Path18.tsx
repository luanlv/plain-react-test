// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path18Icon(props: Path18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 12"}
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
          "M.138 6.16C.388 2.165 2.225 0 4.124 0s3.13 2.124 2.838 6.16C6.936 9.172 4.69 11.686 1.745 12c-1.878 0-1.9-1.848-1.607-5.84z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path18Icon;
/* prettier-ignore-end */
