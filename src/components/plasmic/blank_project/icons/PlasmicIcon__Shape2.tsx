// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape2Icon(props: Shape2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 86 85"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M85.059 38.354l-.918 12.042-7.513-.459a33.642 33.642 0 01-7.283 15.021l5.864 7.063-9.349 7.708-5.76-6.937a34.765 34.765 0 01-13.188 4.395L46.307 85l-12.041-.896.584-7.625a33.977 33.977 0 01-13.898-6.687l-5.635 4.791-7.867-9.187 5.572-4.709a33.939 33.939 0 01-4.904-15.895L0 44.167l.897-12.021 8.619.646a34.025 34.025 0 017.116-12.73l-4.445-5.354L21.536 7l4.528 5.5a33.013 33.013 0 0113.92-4.167L40.61 0l12.04.896-.646 8.479a34.409 34.409 0 0113.063 6.938l6.615-5.605 7.847 9.188-6.678 5.687a33.525 33.525 0 014.174 12.188l8.034.583zm-62.697 2.889c-.855 11.193 7.537 20.96 18.748 21.82a20.348 20.348 0 0014.841-4.835 20.28 20.28 0 007.03-13.916c.842-11.193-7.561-20.951-18.773-21.798-11.213-.848-20.991 7.536-21.846 18.729z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
