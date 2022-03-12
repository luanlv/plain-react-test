// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape6Icon(props: Shape6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 189 320"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.035 320h152.93c9.956-.011 18.024-8.076 18.035-18.027V18.026C188.989 8.076 180.921.011 170.965 0H18.035C8.08.011.011 8.075 0 18.026v283.947c.011 9.951 8.08 18.016 18.035 18.027zM1.345 18.026c.01-9.208 7.477-16.671 16.69-16.681h152.93c9.213.01 16.679 7.473 16.69 16.681v283.947c-.011 9.209-7.477 16.672-16.69 16.682H18.035c-9.213-.01-16.68-7.473-16.69-16.682V18.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape6Icon;
/* prettier-ignore-end */
