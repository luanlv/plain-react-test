// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path35Icon(props: Path35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 307"}
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
          "M35.955 234.877l.916-56.675L75 108.086l-37.985 61.225.411-25.484 26.279-50.728-26.17 43.984v.001l.741-45.834 28.14-40.386-28.024 33.179L38.855 0l-2.908 111.257.239-4.589L7.576 62.65l28.15 52.828-2.665 51.188-.08-1.358L0 118.985l32.882 51.122-.333 6.402-.06.096.027.526L25.753 307h9.036l1.084-67.08 32.802-50.997-32.72 45.954z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path35Icon;
/* prettier-ignore-end */
