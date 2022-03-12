// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
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
          "M2.148.72c2.165-1.233 4.66 4.97 4.667 4.986a.315.315 0 01-.082.358c-2.765 2.43 3.48 8.866 5.996 6.185a.311.311 0 01.362-.077c.02.007 6.143 2.684 4.847 4.811C12.883 25.29-6.376 5.57 2.148.72z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.36 5.625a9.622 9.622 0 012.09 4.581l-1.373-.132a8.335 8.335 0 00-1.74-3.602 8.32 8.32 0 00-3.213-2.384l.13-1.374a9.636 9.636 0 014.105 2.911z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.405 3.933a12.279 12.279 0 012.759 6.526l-1.353-.127a10.957 10.957 0 00-2.43-5.552 10.971 10.971 0 00-4.998-3.427L10.51 0c2.233.681 4.296 2 5.896 3.933zM12.52 7.147a7.251 7.251 0 011.445 2.82l-1.427-.134a5.987 5.987 0 00-2.653-3.207l.134-1.427a7.266 7.266 0 012.502 1.948z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
