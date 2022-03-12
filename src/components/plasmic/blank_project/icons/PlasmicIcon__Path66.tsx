// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path66Icon(props: Path66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 11"}
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
          "M18.525 9.822c-.6.682-1.628.819-2.558.909a15.45 15.45 0 01-3.628.065c-1.434-.2-2.294.567-3.604-.024-.793-.357-2.013.357-2.806 0-1.086-.49-4.838-.59-5.5-1.546-.661-.955-.594-2.464.452-3.027a7.23 7.23 0 01.916-.338C3.548 5.205 7.096.258 8.96.005a5.216 5.216 0 012.65.588c1.837.767 5.08 1.373 5.882 3.32.624 1.518 2.333 4.426 1.034 5.909z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path66Icon;
/* prettier-ignore-end */
