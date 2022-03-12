// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path63IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path63Icon(props: Path63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 25"}
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
          "M1.893 6.916c.128 1.291-.107 2.615.175 3.882.212.952.705 1.817.995 2.748.288 1.08.436 2.19.44 3.308.043.937-.03 2.075-.857 2.514-.364.193-.8.197-1.178.359-.379.161-.704.62-.487.97.182.295.596.298.935.368.339.07.712.421.515.706a.607.607 0 01-.302.192 3.466 3.466 0 00-.972.469.981.981 0 00-.4.946.584.584 0 00.835.385 2.593 2.593 0 00-.244 1.035c1.325.57 2.816-.175 4.063-.9.54-.3 1.062-.632 1.563-.996a7.791 7.791 0 003.012-6.629 15.31 15.31 0 00-.292-1.896 29.058 29.058 0 00-.765-3.222c-.356-1.117-.846-2.185-1.266-3.28C6.768 5.546 6.192 3.105 5.385.74A.825.825 0 004.42.013a9.466 9.466 0 00-2.703.249c-.535.156-1.411.5-1.65 1.06-.217.505.145.957.375 1.39a11.553 11.553 0 011.451 4.204z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path63Icon;
/* prettier-ignore-end */
