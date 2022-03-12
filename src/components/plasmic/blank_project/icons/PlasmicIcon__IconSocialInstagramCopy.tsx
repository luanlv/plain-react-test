// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSocialInstagramCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSocialInstagramCopyIcon(
  props: IconSocialInstagramCopyIconProps
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.456 2.759c.959.054 1.43.196 1.864.968.452.77.68 2.099.68 4.438v.008c0 2.328-.228 3.666-.679 4.429-.434.772-.905.912-1.864.977-.959.055-3.368.088-5.455.088-2.091 0-4.501-.033-5.459-.09-.957-.064-1.428-.204-1.866-.976C.23 11.838 0 10.5 0 8.17v-.007c0-2.338.23-3.666.677-4.437.438-.773.91-.914 1.867-.97.957-.063 3.367-.09 5.458-.09 2.087 0 4.496.027 5.454.092zM11 8.167l-5-3v6l5-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramCopyIcon;
/* prettier-ignore-end */
