// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path59Icon(props: Path59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 21"}
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
          "M12 16.18a46.482 46.482 0 01-.837 4.82c-2.161-3.652-4.491-7.213-6.481-10.957C4.168 9.078 3.68 8.1 3.189 7.125L1.722 4.2c-.274-.547-.55-1.097-.798-1.658A11.848 11.848 0 010 .006c.724-.13 2.508 1.777 3.043 2.274a40.9 40.9 0 013.11 3.349 36.552 36.552 0 013.229 4.13A19.848 19.848 0 0112 16.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path59Icon;
/* prettier-ignore-end */
