// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path92IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path92Icon(props: Path92IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 32"}
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
          "M.377 26.023c.989 3.266 3.79 5.605 7.107 5.937 3.318.331 6.505-1.41 8.09-4.419-6.366-8.54-.906-13.905 9.436-17.963 1.593-3.034 1.24-6.755-.891-9.418-5.773-.758-11.57 1.2-15.776 5.329l-.005.005L.99 19.476a8.656 8.656 0 00-.614 6.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path92Icon;
/* prettier-ignore-end */
