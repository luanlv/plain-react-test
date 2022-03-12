// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path29Icon(props: Path29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 19"}
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
          "M28.838 9.063a5.949 5.949 0 012.068 2.734c.214.885.13 1.814-.24 2.65-1.063 2.137-3.092 3.667-5.483 4.133a23.133 23.133 0 01-7.16.254l-7.572-.509a21.441 21.441 0 01-5.679-.89 6.954 6.954 0 01-4.221-3.582 9.494 9.494 0 01-.522-3.921C.029 3.785 2.205-1.28 9.146.288a45.849 45.849 0 0119.692 8.775z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path29Icon;
/* prettier-ignore-end */
