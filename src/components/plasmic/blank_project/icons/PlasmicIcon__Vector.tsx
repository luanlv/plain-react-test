// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M11.98 10.542h-.758l-.268-.26a6.202 6.202 0 001.504-4.053 6.229 6.229 0 10-6.229 6.23 6.202 6.202 0 004.054-1.505l.259.268v.757l4.791 4.782 1.428-1.428-4.782-4.791zm-5.75 0a4.307 4.307 0 01-4.313-4.313 4.307 4.307 0 014.312-4.312 4.307 4.307 0 014.313 4.312 4.307 4.307 0 01-4.313 4.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
