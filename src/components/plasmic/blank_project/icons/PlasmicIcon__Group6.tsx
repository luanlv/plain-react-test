// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 16"}
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
          "M41.205 0c.011.245.018.492.02.74a20.555 20.555 0 01-.02-.74zM1.119 9.282c.61 1.594.586 3.349.554 5.055l-.025 1.336a9.082 9.082 0 00-.53-2.695c-.251-.66-.607-1.277-.835-1.945a5.477 5.477 0 01.04-3.591c.228.627.557 1.215.796 1.84z"
        }
        opacity={".1"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
