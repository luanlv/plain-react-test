// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EssentialsShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EssentialsShareIcon(props: EssentialsShareIconProps) {
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
          "M10 2.499a2.5 2.5 0 015 0 2.5 2.5 0 01-3.566 2.26L9.131 7.52l2.038 2.858A2.5 2.5 0 0115 12.493a2.5 2.5 0 11-4.559-1.417L8.246 8H4.949A2.501 2.501 0 010 7.495 2.5 2.5 0 014.95 7h3.312l2.37-2.84A2.488 2.488 0 0110 2.499z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EssentialsShareIcon;
/* prettier-ignore-end */
