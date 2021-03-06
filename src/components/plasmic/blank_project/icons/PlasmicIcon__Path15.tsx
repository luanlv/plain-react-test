// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 202"}
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
          "M122.887 109.507c-.486 12.595-10.248 58.881-10.565 71.497 0 4.198 1.12 10.643-.233 14.694-2.789 8.586-12.678 7.41-13.967 2.351l-.486-2.519c-4.585-24.518 2.789-52.332 0-84.344-1.67-19.543-9.445-57.223-14.538-57.475-2.683 0-63.941 129.14-69.266 137.096-2.62 4.01-9.995 3.38-13.566 6.613-3.571 3.232 29.752-97.905 43.72-151.35a169.165 169.165 0 006.339-33.818c.38-6.612-1.754-8.837 4.352-10.79C58.904.12 64.757.498 69.28.183c4.923-.378 50.713-.462 50.713 2.771-.444 17.55 4.078 77.46 2.895 106.554z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
