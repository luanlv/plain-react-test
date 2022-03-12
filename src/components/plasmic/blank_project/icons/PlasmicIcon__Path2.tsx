// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path2Icon(props: Path2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 944 123"}
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
        opacity={".24"}
        d={
          "M151.503 31.613c-46.449 4.67-94.323 9.806-135.196 32.65-5.471 3.065-11.026 6.679-14.044 12.195-6.058 11.095.817 25.719 11.486 32.397 10.67 6.678 23.833 7.439 36.388 7.989 223.567 9.742 447.47 5.917 671.225 2.113 64.979-1.099 130.984-2.367 193.258-21.24 11.193-3.38 23.497-8.453 27.71-19.505 5.513-14.456-7.063-30.475-21.736-34.976-14.672-4.501-30.33-1.141-45.506.824-52.695 6.826-105.851-3.614-158.316-11.961C614.064 15.784 507.5 2.512 403.472.039c-35.465-.824-65.754 11.476-100.465 16.337-50.117 7.058-101.114 10.165-151.504 15.237z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path2Icon;
/* prettier-ignore-end */
