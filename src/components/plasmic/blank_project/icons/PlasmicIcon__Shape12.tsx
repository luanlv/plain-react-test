// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape12Icon(props: Shape12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
        d={"M0 17h17V0H0v17zm15.692-1.308H1.308V1.308h14.384v14.384z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape12Icon;
/* prettier-ignore-end */
