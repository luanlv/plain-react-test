// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DollarCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DollarCircleIcon(props: DollarCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
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
        d={
          "M14.092 23.286c0 2.096 1.608 3.786 3.607 3.786h4.079c1.739 0 3.152-1.479 3.152-3.299 0-1.982-.86-2.68-2.145-3.136l-6.548-2.275c-1.284-.455-2.145-1.153-2.145-3.136 0-1.82 1.413-3.299 3.152-3.299h4.079c1.999 0 3.607 1.69 3.607 3.787M19.5 9.75v19.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.5 35.75c8.975 0 16.25-7.275 16.25-16.25S28.475 3.25 19.5 3.25 3.25 10.525 3.25 19.5s7.275 16.25 16.25 16.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DollarCircleIcon;
/* prettier-ignore-end */
