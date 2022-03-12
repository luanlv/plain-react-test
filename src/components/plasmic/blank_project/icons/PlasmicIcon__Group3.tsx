// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 17"}
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
          "M1 11.156C1 12.732 2.219 14 3.714 14h3.055c1.3 0 2.356-1.105 2.356-2.486 0-1.479-.65-2.015-1.609-2.356L2.625 7.45c-.959-.341-1.609-.861-1.609-2.356 0-1.365 1.056-2.486 2.356-2.486h3.055c1.495 0 2.714 1.267 2.714 2.844M5.063 1v14.625"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
