// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path113IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path113Icon(props: Path113IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 62"}
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
          "M10.768 0l6.413 3.988s21.733 30.456 14.252 37.345C23.95 48.223 4.712 62 4.712 62s-6.413-9.427-4.276-9.79c2.138-.362 19.24-14.865 19.24-14.865L4.711 9.065 10.768 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path113Icon;
/* prettier-ignore-end */
