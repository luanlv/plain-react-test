// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path62Icon(props: Path62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 69"}
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
          "M37.837 11.496c.61-2.184-.588-4.457-2.021-6.232-1.54-1.906-3.53-3.626-5.96-4.105-1.974-.389-4.02.08-6.027-.076-1.78-.138-3.485-.765-5.255-.99a16.947 16.947 0 00-4.803.18 18.13 18.13 0 00-4.378 1.2C4.061 3.793.936 9.523.211 15.206c-.724 5.682.547 11.407 1.81 16.998l1.143 5.054c1.189 5.26 2.382 10.548 2.7 15.928.318 5.379-.276 10.901-2.53 15.814 7.287-3.843 12.932-10.119 15.916-17.693.81-2.08 1.41-4.239 2.308-6.284.772-1.76 1.76-3.427 2.445-5.222a16.726 16.726 0 001.092-6.344c-.039-1.626-.316-3.245-.268-4.87.048-1.626.47-3.323 1.614-4.499 1.018-1.045 2.463-1.547 3.775-2.205a15.603 15.603 0 005.274-4.322c.825-1.056.87-1.507 1.08-2.725.203-1.186.947-2.19 1.267-3.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path62Icon;
/* prettier-ignore-end */
