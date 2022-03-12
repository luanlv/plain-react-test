// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path4Icon(props: Path4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 550"}
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
          "M38.026 47.966V531.82c-.034 10.027-8.08 18.147-18.017 18.181h-2.075C8.016 549.954 0 541.827 0 531.819V47.966L18.08 0l19.946 47.966z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path4Icon;
/* prettier-ignore-end */
