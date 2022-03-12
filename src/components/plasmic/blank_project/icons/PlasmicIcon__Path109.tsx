// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path109IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path109Icon(props: Path109IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 18"}
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
          "M1.887 9C1.887 4.392 5.389.529 10 .049A9.214 9.214 0 009.057 0C4.055 0 0 4.03 0 9s4.055 9 9.057 9c.315 0 .63-.016.943-.049-4.611-.48-8.113-4.343-8.113-8.951z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path109Icon;
/* prettier-ignore-end */
