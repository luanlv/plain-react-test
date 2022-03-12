// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path21Icon(props: Path21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 21"}
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
          "M.32 20.987C-1.111 20.501 2.677 6.18 3.503 3.703 4.329 1.228 6.183-.4 7.533.086c1.35.487 1.914 2.898 1.087 5.395-.826 2.496-6.95 15.993-8.3 15.506z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path21Icon;
/* prettier-ignore-end */
