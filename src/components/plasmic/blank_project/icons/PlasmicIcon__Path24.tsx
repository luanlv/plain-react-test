// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path24Icon(props: Path24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 63"}
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
          "M43.048 51.808c.824-4.914 2.168-40.1-1.127-44.757C38.626 2.394 18.898-.619 15.906.108c-6.7 1.623-5.529 6.409-5.529 6.409-1.99.03-3.94.567-5.658 1.56C2.421 9.614-2.413 31.79 1.446 48.56c1.734 7.542 8.563 14.1 20.357 14.42 14.525.385 20.248-5.084 21.245-11.172z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path24Icon;
/* prettier-ignore-end */
