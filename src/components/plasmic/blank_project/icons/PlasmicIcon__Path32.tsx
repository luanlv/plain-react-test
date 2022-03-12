// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path32Icon(props: Path32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M3.583 5.976A9.15 9.15 0 00.5 9.297a7.548 7.548 0 00-.454 3.522c-.079 2.89 1.236 5.66 3.582 7.548a12.82 12.82 0 005.393 1.49c1.163.19 2.353.19 3.516 0 1.187-.211 2.178-.969 2.632-2.013a7.53 7.53 0 00.194-2.013c.151-3.32 2.654-6.038 4.725-8.755.5-.525.823-1.176.928-1.872a3.305 3.305 0 00-.82-2.113c-1.403-1.892-4.877-5.374-7.66-5.073C9.753.32 5.741 4.326 3.583 5.976z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path32Icon;
/* prettier-ignore-end */
