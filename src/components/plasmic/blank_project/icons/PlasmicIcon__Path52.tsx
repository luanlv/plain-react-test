// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path52Icon(props: Path52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 56"}
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
          "M45.775 41.238a20.16 20.16 0 00-2.253 5.691 44.179 44.179 0 00-1.129 9.001c-11.173.344-23.748-.639-33.792-1.753a347.97 347.97 0 01-2.817-7.81C3.212 38.97.822 31.422.822 30.313c0-2.185 11.513 1.638 14.254 1.092 2.74-.546 3.837-9.285 0-13.655C11.238 13.381 0 6.008 0 6.008l3.837-1.092s8.498 6.281 26.04 16.659c17.543 10.377 10.416-6.008 10.416-6.008L30.151 0h4.386s8.497 14.474 12.883 21.029c4.386 6.554 2.741 13.108-1.645 20.209z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path52Icon;
/* prettier-ignore-end */
