// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path64Icon(props: Path64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 59"}
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
          "M11.314 0c.258.269.475.577.641.914 1.72 3.201 1.741 7.033 1.822 10.686.09 4.113.31 8.22.53 12.328l.657 12.283c.063 1.173.125 2.348.286 3.512.773.2.805 1.223.715 2.034-.553 5.013-1.93 10.172-.488 14.996.055.248.171.478.337.668a3.793 3.793 0 00-2.236-.03c-.719.154-1.41.424-2.125.59-.911.213-1.944.304-2.565 1.019a51.969 51.969 0 01-1.674-6.625c-.341-2.04-.434-4.16-1.245-6.056-.327-.765-.765-1.475-1.164-2.204-2.1-3.833-3.129-8.17-4.134-12.443a18.59 18.59 0 01-.32-6.182c.143-.942.227-1.892.251-2.845a23.473 23.473 0 00-.385-2.993A20.589 20.589 0 01.8 10.986c.752-2.61 1.412-5.356 2.986-7.549C5.36 1.245 8.658.037 11.314 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path64Icon;
/* prettier-ignore-end */
