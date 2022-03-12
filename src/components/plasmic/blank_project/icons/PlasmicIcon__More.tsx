// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoreIcon(props: MoreIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M12.143 1.5H5.857C3.127 1.5 1.5 3.127 1.5 5.857v6.278c0 2.738 1.627 4.365 4.357 4.365h6.278c2.73 0 4.357-1.627 4.357-4.357V5.857c.008-2.73-1.62-4.357-4.35-4.357zM5.25 9.982A.986.986 0 014.268 9c0-.54.442-.982.982-.982s.982.442.982.982-.442.982-.982.982zm3.75 0A.986.986 0 018.018 9c0-.54.442-.982.982-.982s.982.442.982.982-.442.982-.982.982zm3.75 0A.986.986 0 0111.768 9c0-.54.442-.982.982-.982s.982.442.982.982-.442.982-.982.982z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreIcon;
/* prettier-ignore-end */
