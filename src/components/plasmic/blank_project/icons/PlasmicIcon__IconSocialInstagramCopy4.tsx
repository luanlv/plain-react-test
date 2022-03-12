// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSocialInstagramCopy4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSocialInstagramCopy4Icon(
  props: IconSocialInstagramCopy4IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M9 5.5v-2a1 1 0 011-1h1V0H9a3 3 0 00-3 3v2.5H4V8h2v8h3V8h2l1-2.5H9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramCopy4Icon;
/* prettier-ignore-end */
