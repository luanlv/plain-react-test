// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path39Icon(props: Path39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 45"}
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
          "M33 28.235C33 40.66 25.613 45 16.5 45a28.314 28.314 0 01-1.886-.064C6.39 44.354 0 39.792 0 28.235 0 16.275 15.284 1.183 16.432.066l.002-.002L16.5 0S33 15.808 33 28.235z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path39Icon;
/* prettier-ignore-end */
