// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path70Icon(props: Path70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 30"}
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
          "M7.59 3.375c.243.65.425 1.32.543 2.005.701 3.508 1.143 7.064 1.579 10.617.116.948.232 1.897.268 2.852a13.412 13.412 0 01-1.311 6.562c-1 2.037-2.698 3.617-4.766 4.432-.636.233-1.526.276-1.804-.36a1.395 1.395 0 01.006-.907c.251-.946.763-1.795 1.095-2.714a7.546 7.546 0 00.235-4.29c-.13-.544-.406-1.15-.939-1.259a5.01 5.01 0 01-.623 3.65 1.26 1.26 0 01-.726.636.977.977 0 01-1.023-.682 3 3 0 01-.083-1.35 47.07 47.07 0 011.006-6.77c.594-2.444 1.535-4.856 1.474-7.375-.054-2.283-.936-4.525-.689-6.794a.721.721 0 01.126-.391.698.698 0 01.276-.175 13.55 13.55 0 011.9-.65c.383-.1 1.691-.568 2.058-.359.297.17.389 1.187.537 1.531.263.61.613 1.175.862 1.791z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path70Icon;
/* prettier-ignore-end */
