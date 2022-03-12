// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path25Icon(props: Path25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 63"}
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
          "M15.987 1.762a7.469 7.469 0 015.6-1.72A48.507 48.507 0 0139.52 3.375a22.14 22.14 0 018.42 5.332 11.025 11.025 0 012.968 9.326c-1.052 5.013-6.315 8.114-8.04 12.937-1.39 3.866-.4 7.604-.359 11.492a58.544 58.544 0 01-.673 9.389c-.969 6.054-6.505 11.492-20.714 11.131-11.45-.319-18.081-6.84-19.765-14.339a82.957 82.957 0 011.747-37.43 81.908 81.908 0 0018.818 2.125 80.472 80.472 0 0019.935-2.337c1.116 6.5 1.094 19.522.737 29.252"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path25Icon;
/* prettier-ignore-end */
