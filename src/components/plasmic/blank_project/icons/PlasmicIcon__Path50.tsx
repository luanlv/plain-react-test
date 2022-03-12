// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path50Icon(props: Path50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 45"}
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
          "M9.253 6.111s2.722 10.556 0 11.111C6.532 17.778 0 20.556 0 20.556l8.165 3.333 15.24 14.444L36.468 45 43 42.778V30.556L33.203 15s-6.532 2.222-8.165-5c-1.633-7.222-4.899-10-4.899-10L9.253 6.111z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path50Icon;
/* prettier-ignore-end */
