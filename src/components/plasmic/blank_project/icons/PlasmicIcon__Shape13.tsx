// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape13Icon(props: Shape13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
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
          "M39.867 39.409C47.3 39.409 52 33.087 52 23.055 52 9.409 41.546 0 26.46 0 10.766 0 0 10.587 0 26.006 0 41.805 10.549 51.986 27.03 52a37.853 37.853 0 008.49-.92 2.14 2.14 0 00-.908-4.184 41.11 41.11 0 01-7.366.623c-13.555 0-22.263-8.312-22.263-21.336 0-12.739 8.802-21.742 21.152-21.742 12.486 0 20.936 7.541 20.936 18.818 0 7.067-2.383 11.616-6.134 11.616-2.167 0-3.372-1.314-3.372-3.493V13.876H32.16v3.764h-.541c-1.246-2.748-4.076-4.427-7.408-4.427-6.486 0-10.928 5.266-10.928 12.834 0 7.879 4.415 13.172 11.023 13.172 3.71 0 6.473-1.719 7.814-4.86h.541c.502 3.02 3.4 5.05 7.205 5.05zM25.309 34.21c-3.832 0-6.188-3.032-6.188-8.041 0-5.023 2.316-7.974 6.256-7.974 3.968 0 6.514 3.046 6.514 7.974 0 4.927-2.546 8.041-6.582 8.041z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape13Icon;
/* prettier-ignore-end */
