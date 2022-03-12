// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path60Icon(props: Path60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 16"}
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
          "M22 4.615s-5.551 8.962-4.523 10.837C18.505 17.328 0 13.785 0 13.785S10.075 4.824 9.047 1.072C8.019-2.678 22 4.615 22 4.615z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path60Icon;
/* prettier-ignore-end */
