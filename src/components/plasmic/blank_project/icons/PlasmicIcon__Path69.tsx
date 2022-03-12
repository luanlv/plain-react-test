// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path69Icon(props: Path69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 16"}
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
          "M10.641 8.125c-.429-2.07.382-4.286-.252-6.304-.229-.728-.79-1.485-1.564-1.464-.75.02-1.258.745-1.924 1.089-1.073.553-2.376.05-3.448-.504S1.186-.24.023.092c-.137.719.355 1.403.89 1.909a5.183 5.183 0 011.44 1.645c.174.695.24 1.412.196 2.126.122 1.64 1.175 3.052 2.228 4.328a78.499 78.499 0 005.396 5.9c-.003-.003 2.882-3.522 2.826-4.137-.052-.58-1.023-1.122-1.375-1.59a5.41 5.41 0 01-.983-2.148z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path69Icon;
/* prettier-ignore-end */
