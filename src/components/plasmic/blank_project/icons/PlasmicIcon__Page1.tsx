// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Page1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Page1Icon(props: Page1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M12.019 8.789V7.211h-3.23v-3.23H7.21v3.23H3.98V8.79h3.23v3.23h1.58V8.79h3.23zM8 0c2.204 0 4.088.782 5.653 2.347C15.217 3.912 16 5.797 16 8c0 2.204-.783 4.088-2.347 5.653C12.088 15.217 10.203 16 8 16c-2.203 0-4.088-.783-5.653-2.347C.782 12.088 0 10.203 0 8c0-2.203.782-4.088 2.347-5.653C3.912.782 5.797 0 8 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Page1Icon;
/* prettier-ignore-end */
