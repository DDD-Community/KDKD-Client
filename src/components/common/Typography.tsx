import React, { ReactNode } from 'react';
import '@/styles/Typography.scss';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function Headline({
  children,
  className = 'headline-32-600',
  ...props
}: Props) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

export function Title({
  children,
  className = 'title-20-600',
  ...props
}: Props) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

export function Body({ children, className = 'body-14-400', ...props }: Props) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

export function Label({
  children,
  className = 'label-12-400',
  ...props
}: Props) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

{
  /* <Title className='title-14-600 subtitle'></Title>

<Headline className=""></Headline> */
}
