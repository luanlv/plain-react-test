// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path40Icon(props: Path40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 45"}
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
          "M6.712 43.106l6.107-8.434-6.123 9.36L6.68 45c-.427-.01-.85-.03-1.269-.057l.659-12.435-.005-.096.01-.018.063-1.175L0 21.836l6.157 8.503.014.249.498-9.395-5.255-9.696 5.319 8.047L7.25.066 7.253 0v.064l-.087 15.36 5.232-6.09-5.253 7.413-.138 8.411 4.884-8.072-4.905 9.31-.077 4.676L14 19.837 6.883 32.704l-.171 10.402z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path40Icon;
/* prettier-ignore-end */
