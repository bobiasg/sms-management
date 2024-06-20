'use client';

import React, {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from 'react';
import { ScrollElement, ScrollLink } from 'react-scroll';

const Element: React.FC<
  React.PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      parentBindings: { domNode: HTMLElement | null };
    }
  >
> = ({ children, parentBindings, ...props }): JSX.Element => {
  return (
    <div
      {...props}
      key={props.key}
      ref={(el) => {
        // eslint-disable-next-line no-param-reassign
        parentBindings.domNode = el;
      }}
    >
      {children}
    </div>
  );
};

export const ScrollableElement = ScrollElement(Element);

const Link: React.FC<
  React.PropsWithChildren<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  >
> = ({ children, ...props }): JSX.Element => {
  return <a {...props}>{children}</a>;
};

export const ScrollableLink = ScrollLink(Link);
