// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path89Icon(props: Path89IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 169"}
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
          "M24.734 0S34.821 7.078 50.96 4.55c0 0 4.54 9.1 2.018 14.155-2.522 5.056 3.026 17.189 4.034 18.705 1.009 1.517 12.609 32.86 16.644 66.732 4.034 33.872 15.13 57.127 5.547 60.16-9.582 3.034-29.252 6.572-31.269 3.539-2.017-3.033-5.043-78.36-5.043-78.36l-5.548 28.817s7.565 49.038 2.017 50.049c-5.547 1.011-40.347-2.023-39.339-8.089 1.01-6.067 11.096-37.916 11.096-37.916S10.613 58.643 20.7 46.51c0 0 4.034-6.572-1.513-15.166C13.639 22.749 14.143 9.1 14.143 9.1s4.035 0 10.591-9.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path89Icon;
/* prettier-ignore-end */
