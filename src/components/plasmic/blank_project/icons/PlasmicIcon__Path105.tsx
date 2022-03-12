// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path105Icon(props: Path105IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 109 169"}
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
          "M69.286 0l-9.377 17.635S-7.892 30.59.763 50.745C9.42 70.9 19.156 100.41 24.205 99.691c5.05-.72 32.819-16.556 33.9-21.234 1.083-4.679-24.884-26.632-24.884-26.632l42.917-8.278s6.13 28.792-1.803 48.586c-7.934 19.794-12.623 73.418-7.213 74.138 5.41.72 19.114 5.039 25.245 1.08 6.13-3.959 9.016-90.694 9.016-90.694s12.983-56.863 5.049-63.34C98.498 6.837 69.286 0 69.286 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path105Icon;
/* prettier-ignore-end */
