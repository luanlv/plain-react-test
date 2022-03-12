// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path110Icon(props: Path110IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 67"}
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
          "M44.25.81s-12.953 3.94-19.43 0C18.343-3.132 2.87 8.331.35 13.346c-2.518 5.015 9.356 10.03 9.356 10.03s-3.39 9.684-2.698 14.507c.72 5.015-.54 15.224-.54 15.224s31.79 20.85 38.862 11.463c1.08-1.433 10.076-35.105 10.076-35.105L68 16.93S60.084 5.466 55.406 4.39C50.728 3.317 44.25.81 44.25.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path110Icon;
/* prettier-ignore-end */
