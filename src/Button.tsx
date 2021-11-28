import React, { FC } from 'react';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**Select a variant color */
  variant: 'primary' | 'secondary';
}
/**WOW BIG BUTTON!!! */
export const Button: FC<IProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      style={{
        background: variant === 'primary' ? 'blue' : 'red',
        color: 'white',
        padding: '1rem',
        borderRadius: '7px',
        cursor: 'pointer',
        border: 'none',
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
