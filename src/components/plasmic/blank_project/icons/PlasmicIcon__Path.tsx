// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PathIcon(props: PathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1491 1161"}
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
          "M318.343 86.694C198.405 187.217 179.819 377.298 98.589 517.527c-28.277 48.795-64.814 92.465-83.877 146.596C-29.054 788.026 31.18 928.572 111.8 1026.98c38.444 46.95 83.348 89.96 137.677 109.74 41.78 15.22 86.578 15.85 130.555 16.25l770.467 7.93c86.02.87 181.6-2.28 243.45-68.69 42.62-45.73 59.94-112.518 74.63-176.266 18.06-78.331 34.42-163.398 6.33-238.004-32.09-85.358-113.24-133.73-163.65-207.385-81.81-119.332-79.93-299.824-184.12-395.089-48.63-44.462-112.81-61.898-175.348-70.616-117.9-16.459-229.577 14.61-345.359 10.277-98.969-3.699-205.986 2.747-288.09 71.567z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PathIcon;
/* prettier-ignore-end */
