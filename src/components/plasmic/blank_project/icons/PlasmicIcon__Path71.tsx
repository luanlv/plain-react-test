// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path71Icon(props: Path71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
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
          "M15.684 4.61c0 .592.046 1.184.14 1.768.128.592.309 1.17.54 1.729.309.908.745 1.768 1.295 2.553A3.808 3.808 0 0020 12.193 66.354 66.354 0 010 18c1.092-.73 2-1.704 2.653-2.846a8.264 8.264 0 00.703-2.317c.59-3.36.29-6.816-.87-10.023-.114-.316-.227-.704-.01-.96a.906.906 0 01.33-.214A20.542 20.542 0 0111.5.01c.762.006 1.524.04 2.284.095.409.03 1.311-.057 1.636.244.388.359.194 1.473.206 1.96l.057 2.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path71Icon;
/* prettier-ignore-end */
