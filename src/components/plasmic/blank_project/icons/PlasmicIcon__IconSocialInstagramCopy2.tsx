// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSocialInstagramCopy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSocialInstagramCopy2Icon(
  props: IconSocialInstagramCopy2IconProps
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
          "M16 2.872a6.839 6.839 0 01-1.89.518 3.262 3.262 0 001.443-1.813 6.555 6.555 0 01-2.08.794 3.28 3.28 0 00-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 01-6.761-3.43 3.285 3.285 0 001.008 4.384A3.24 3.24 0 01.64 5.91v.036A3.295 3.295 0 003.268 9.17a3.274 3.274 0 01-.86.108 2.9 2.9 0 01-.621-.056 3.311 3.311 0 003.065 2.285 6.59 6.59 0 01-4.067 1.4c-.269 0-.527-.013-.785-.046a9.234 9.234 0 005.032 1.472c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0016 2.872z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramCopy2Icon;
/* prettier-ignore-end */
