// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path41Icon(props: Path41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 167 366"}
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
          "M167 15.09v335.826c-.002 8.332-6.777 15.085-15.133 15.084H15.133C6.777 366.001.002 359.248 0 350.916V15.09c0-4.002 1.594-7.84 4.432-10.67A15.154 15.154 0 0115.133 0h20.461v2.62c.002 6.862 5.58 12.424 12.461 12.426h69.537c6.882 0 12.461-5.563 12.461-12.426V0h21.814c4.014 0 7.863 1.59 10.701 4.42A15.068 15.068 0 01167 15.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path41Icon;
/* prettier-ignore-end */
