// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path98IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path98Icon(props: Path98IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 115"}
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
        opacity={".1"}
        d={
          "M41 110.056a183.913 183.913 0 01-2.19 2.592A90.45 90.45 0 0136.693 115s-.93-1.172-2.494-3.368C25.61 99.632-2.017 56.959.117 7.668.232 5.084.422 2.528.685 0c1.622 1.733 3.2 3.53 4.735 5.39C37.748 44.47 40.76 97.056 41 110.056z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path98Icon;
/* prettier-ignore-end */
