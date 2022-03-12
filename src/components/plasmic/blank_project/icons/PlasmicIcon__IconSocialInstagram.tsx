// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSocialInstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSocialInstagramIcon(props: IconSocialInstagramIconProps) {
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
          "M5 0h6a5 5 0 015 5v6a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5zm6 14.5c1.93 0 3.5-1.57 3.5-3.5V5c0-1.93-1.57-3.5-3.5-3.5H5C3.07 1.5 1.5 3.07 1.5 5v6c0 1.93 1.57 3.5 3.5 3.5h6zM4 8a4 4 0 118 0 4 4 0 01-8 0zm1.5 0c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.379-1.122-2.5-2.5-2.5A2.503 2.503 0 005.5 8zm7.333-4.3a.533.533 0 11-1.066 0 .533.533 0 011.066 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramIcon;
/* prettier-ignore-end */
