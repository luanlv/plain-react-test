// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
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
          "M9.708 3.245l.016.003H2.84l2.164-2.03a.51.51 0 000-.749L4.668.154A.578.578 0 004.27 0a.578.578 0 00-.398.154L.164 3.626a.506.506 0 000 .747l3.709 3.473c.106.1.247.154.397.154.15 0 .292-.055.398-.154l.337-.315a.505.505 0 00.164-.372.49.49 0 00-.164-.365L2.816 4.752h6.9c.31 0 .57-.25.57-.54v-.447c0-.29-.268-.52-.578-.52z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
