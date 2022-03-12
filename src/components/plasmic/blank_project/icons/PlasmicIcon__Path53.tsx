// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path53Icon(props: Path53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 50"}
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
          "M1.467 0L.894 4.328C.699 5.793.505 7.258.4 8.733c-.348 4.902.3 9.825.13 14.736-.132 3.781-.748 7.56-.45 11.333.263 3.336 1.235 6.576 2.201 9.786l1.381 4.59a.894.894 0 00.418.68c.24.15.538.184.806.089L11 49.405c-.392-1.754-.827-3.582-1.037-5.365-.167-1.41-.267-2.827-.371-4.243-.325-4.414-.694-8.825-1.062-13.235l-.647-7.748c-.28-3.361-.564-6.742-1.43-10.006A19.8 19.8 0 001.467 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path53Icon;
/* prettier-ignore-end */
