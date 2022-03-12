// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path33Icon(props: Path33IconProps) {
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
          "M23.806 21.435a6.937 6.937 0 001.186-2.737c.151-1.015-.386-2.011-1.34-2.487-1.516-.564-3.318.92-4.812.293a3.293 3.293 0 01-1.23-1.129 15.29 15.29 0 01-2.923-8.232 15.924 15.924 0 00-.439-4.68C13.804.886 12.22-.151 10.513.018 9.107.33 8.316 1.689 7.437 2.776S4.8 5.158 3.657 6.516a17.883 17.883 0 00-3.229 9.382c-.615 4.179-1.01 8.963 2.065 11.972 2.373 2.32 9.602 5.057 12.92 3.824 3.669-1.38 6.547-7.25 8.393-10.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path33Icon;
/* prettier-ignore-end */
