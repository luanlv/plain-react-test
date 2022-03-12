// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 145 143"}
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
          "M144.1 59.241v20.474l-12.709.104a57.146 57.146 0 01-10.539 26.362l10.855 11.17-14.88 14.249-10.686-11.022a59.197 59.197 0 01-21.856 9.136V143h-20.57v-12.971a58.031 58.031 0 01-24.47-9.535l-8.937 8.822-14.564-14.669 8.873-8.654a57.649 57.649 0 01-10.37-26.278H0V59.24h14.754a57.188 57.188 0 0110.537-22.42l-8.241-8.487 14.88-14.25 8.43 8.738a55.942 55.942 0 0123.184-8.738V0h20.571v14.396a59.328 59.328 0 0123.184 10.08l10.539-10.31 14.479 14.543-10.538 10.478a57.757 57.757 0 018.641 20.054h13.68zM37.959 72.15c-.024 19.061 15.5 34.532 34.67 34.555a34.75 34.75 0 0024.577-10.06 34.353 34.353 0 0010.179-24.412c.023-19.06-15.5-34.532-34.671-34.555-19.172-.023-34.732 15.41-34.755 34.472z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
