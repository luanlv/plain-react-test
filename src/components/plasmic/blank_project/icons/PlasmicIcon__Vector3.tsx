// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 9"}
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
          "M9.708 3.287l.016.003H2.84l2.164-2.057a.52.52 0 000-.758l-.337-.32A.574.574 0 004.27 0a.574.574 0 00-.398.156L.164 3.673a.515.515 0 000 .757l3.709 3.518c.106.1.247.155.397.155.15 0 .292-.055.398-.155l.337-.32a.515.515 0 00.164-.376.5.5 0 00-.164-.37L2.816 4.813h6.9c.31 0 .57-.253.57-.547v-.452c0-.294-.268-.527-.578-.527z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
