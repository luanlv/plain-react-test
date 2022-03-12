// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape9Icon(props: Shape9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 17"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 17h124V0H0v17zm122.652-1.308H1.348V1.308h121.304v14.384z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape9Icon;
/* prettier-ignore-end */
