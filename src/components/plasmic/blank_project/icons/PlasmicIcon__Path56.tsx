// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path56Icon(props: Path56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 17"}
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
          "M1.847 5.44a17.87 17.87 0 00-.929 2.158c-.694 2.04-.8 4.228-.898 6.381a3.05 3.05 0 00.113 1.236c.297.774 1.153 1.167 1.953 1.382 3.352.901 6.886.053 10.342-.257 3.393-.303 6.85-.084 10.173-.832a5.058 5.058 0 001.409-.49 4.38 4.38 0 001.78-2.325 2.97 2.97 0 00.202-.764c.11-1.133-.878-2.118-1.953-2.49-1.075-.373-2.244-.311-3.376-.427A10.646 10.646 0 0111.245.125c-.04-.248-5.596-.102-6.181.22C4.379.72 3.965 1.657 3.579 2.29a41.187 41.187 0 00-1.732 3.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path56Icon;
/* prettier-ignore-end */
