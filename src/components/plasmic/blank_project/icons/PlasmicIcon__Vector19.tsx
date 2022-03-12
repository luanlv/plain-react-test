// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
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
          "M9.715 3.548c-3.464 0-6.285 2.564-6.285 5.726S6.234 15 9.715 15c1.25 0 2.433-.334 3.413-.913.878.544 1.841.527 2.399.456.152-.017.203-.228.068-.333-.541-.37-.828-.879-.997-1.335C15.476 11.89 16 10.644 16 9.274c0-3.162-2.822-5.726-6.285-5.726zm3.683 7.64a.5.5 0 01-.49.51H9.614a.5.5 0 01-.49-.51.5.5 0 01.49-.509h3.294c.287 0 .49.229.49.51zm-.473-1.405h-6.42a.5.5 0 01-.49-.509.5.5 0 01.49-.51h6.403a.5.5 0 01.49.51c0 .281-.203.51-.473.51zm0-1.914h-6.42a.5.5 0 01-.49-.51.5.5 0 01.49-.509h6.403a.5.5 0 01.49.51c0 .28-.203.509-.473.509zM1.149 7.71A4.414 4.414 0 010 4.742C0 2.125 2.332 0 5.187 0c1.943 0 3.65.984 4.528 2.424-3.852 0-7.029 2.775-7.35 6.288-.726.457-1.52.439-1.976.369-.136-.018-.17-.193-.051-.264.422-.316.676-.737.81-1.106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
