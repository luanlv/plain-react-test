// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval14Icon(props: Oval14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 288 288"}
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
          "M144 288c79.529 0 144-64.471 144-144S223.529 0 144 0 0 64.471 0 144s64.471 144 144 144z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval14Icon;
/* prettier-ignore-end */
