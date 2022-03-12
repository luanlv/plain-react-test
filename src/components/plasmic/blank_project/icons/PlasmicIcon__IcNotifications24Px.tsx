// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcNotifications24PxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcNotifications24PxIcon(props: IcNotifications24PxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M15.75 9.59v5.64L18 17.488v1.128H0v-1.128l2.25-2.256V9.59c0-3.475 1.834-6.363 5.063-7.13v-.768a1.688 1.688 0 113.375 0v.767c3.217.768 5.062 3.667 5.062 7.13zm-4.5 10.154A2.26 2.26 0 019 22a2.253 2.253 0 01-2.25-2.256h4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcNotifications24PxIcon;
/* prettier-ignore-end */
