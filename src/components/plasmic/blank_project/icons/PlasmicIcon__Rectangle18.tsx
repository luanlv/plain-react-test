// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle18Icon(props: Rectangle18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2512 934"}
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
        opacity={".5"}
        d={
          "M480.381 8.871c780.729 111.474 1748.429 0 1748.429 0s636.24 1065.039 0 909.248c-636.23-155.795-1265.181 45.663-1748.429 0-483.247-45.664-780.723-1020.721 0-909.248z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle18Icon;
/* prettier-ignore-end */
