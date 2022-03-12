// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path58Icon(props: Path58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 104"}
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
          "M42.999 51.955c.07 11.046-3.111 21.843-6.843 32.227a294.39 294.39 0 01-4.703 12.224c-.982 2.394-2.088 5.049-1.036 7.413-3.027-1.164-6.126-1.851-9.322-1.314 1.217-2.503 1.102-5.418 1.157-8.205a72.09 72.09 0 011.206-11.273 63.24 63.24 0 015.458-16.299 12.41 12.41 0 001.058-3.435 22.1 22.1 0 00-.45-7.931 47.592 47.592 0 00-6.528-16.153c-.01.11-.02.221-.032.33a48.612 48.612 0 01-.82 4.89c-.715 3.421-1.548 6.844-1.424 10.284a55.865 55.865 0 01-.668 10.905 16.622 16.622 0 01-1.086 4.123c-.35.79-.805 1.534-1.08 2.353a10.845 10.845 0 00-.424 2.912c-.407 8.319-.006 18.963 1.678 27.117A15.565 15.565 0 0010.98 104c-2.034-5.799-3.331-14.035-4.3-20.142a60.2 60.2 0 01.658-21.704c.477-2.38.656-4.811.532-7.236-.217-4.83-1.393-9.555-2.561-14.243A60135.453 60135.453 0 01.986 23.359c-.562-2.256-1.13-4.56-.953-6.881.124-1.272.389-2.527.789-3.74A41.978 41.978 0 016.426 1.163c9.753.553 19.625-.37 29.365-1.125.473-.095.965-.01 1.38.237.331.34.528.79.555 1.267l3.659 20.936a53.252 53.252 0 011.042 8.847c.018 2.963-.458 5.916-.347 8.878.148 3.988.895 7.76.919 11.752z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path58Icon;
/* prettier-ignore-end */
