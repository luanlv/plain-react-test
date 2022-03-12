// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path77IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path77Icon(props: Path77IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 125"}
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
          "M99.462 75.94V24.867H125V0H0v125h106.855v-12.222a17.35 17.35 0 0117.348-17.348H125V75.94H99.462z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path77Icon;
/* prettier-ignore-end */
