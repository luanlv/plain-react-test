// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path86Icon(props: Path86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 43"}
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
          "M0 25.8l10.495 16.694 12.493-1.012L43.478 43s1.933-3.916 3.512-7.725a30.178 30.178 0 001.984-5.934c.5-3.541-6.496-7.082-6.496-7.082s-.275-.05-.735-.162c-.61-.147-1.549-.39-2.578-.744-2.324-.799-5.118-2.155-5.682-4.153-1-3.541 6.496-8.6 6.496-8.6L30.984 0s-7.991 11.236-17.696 13.795c-.563.15-1.133.27-1.71.354l-.084.016C.999 15.682 0 25.8 0 25.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path86Icon;
/* prettier-ignore-end */
