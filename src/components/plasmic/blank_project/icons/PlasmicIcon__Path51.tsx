// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path51Icon(props: Path51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 75"}
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
          "M46.355 0H39.74S28.16 3.837 21.544 12.606c-6.617 8.77-17.093 17.54-17.093 17.54S-2.718 40.01 1.14 53.713C5 67.415 10.514 77.281 15.476 74.54 20.44 71.801 8.31 52.07 8.31 52.07l3.309-12.058S28.71 20.28 35.879 20.828c7.168.548 7.72 6.577 7.72 6.577l15.439 4.385L64 21.376l-2.757-10.962L46.355 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path51Icon;
/* prettier-ignore-end */
