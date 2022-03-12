// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path67Icon(props: Path67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 12"}
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
          "M.47 10.4c.593.722 1.61.867 2.529.962 1.187.174 2.392.197 3.585.07 1.418-.213 3.146 1.014 4.441.389.784-.378 1.99-.181 2.773-.56 1.074-.518 6.124.638 6.778-.373.654-1.012.587-2.61-.447-3.206a6.862 6.862 0 00-.906-.358C17.493 6.63 11.768.274 9.926.005a4.875 4.875 0 00-2.62.623c-1.815.812-5.022 1.454-5.814 3.516C.875 5.751-.814 8.83.47 10.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path67Icon;
/* prettier-ignore-end */
