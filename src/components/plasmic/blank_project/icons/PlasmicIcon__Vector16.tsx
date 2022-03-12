// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M14.167 3.508h-1.334a.826.826 0 00-.833.835v9.738h-1V.835A.826.826 0 0010.167 0H8.833A.826.826 0 008 .835v13.246H7V9.354a.826.826 0 00-.833-.835H4.833A.826.826 0 004 9.354v4.727H3V6.013a.826.826 0 00-.833-.835H.833A.826.826 0 000 6.013v8.97h.683c.05.017.1.017.15.017h1.334c.05 0 .1 0 .15-.017h2.366c.05.017.1.017.15.017h1.334c.05 0 .1 0 .15-.017h2.366c.05.017.1.017.15.017h1.334c.05 0 .1 0 .15-.017h2.366c.05.017.1.017.15.017h1.334c.05 0 .1 0 .15-.017H15V4.343a.826.826 0 00-.833-.835z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
