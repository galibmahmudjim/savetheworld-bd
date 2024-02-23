import { Icon } from '@iconify/react';

interface ButtonProps {
      label?: string;
      icon?: any;
      type?: 'button' | 'submit' | 'reset';
      onPress?: () => void;
      left?: boolean;
      right?: boolean;
      styles?: string;
      className?: string;
      disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
      label,
      icon,
      type,
      onPress,
      left,
      right,
      styles,
      className,
      disabled,
}) => {
      return (
            <button
                  type={type ?? 'button'}
                  onClick={onPress}
                  className={`font-medium text-[16px] uppercase items-center px-6 shadow-md justify-center rounded-md py-2.5 text-center inline-flex items-center ${className || ''
                        } ${styles ? styles : 'text-white'}`}
                  disabled={disabled}
            >
                  {!right && (
                        <Icon icon={icon} className={`${label && 'mr-4'} text-[20px]`} />
                  )}
                  {label && label}
                  {right && (
                        <Icon icon={icon} className={`${label && 'ml-4'} text-[20px]`} />
                  )}
            </button>
      );
};

const withVariant =
      (variant: string) => (WrappedComponent: React.ComponentType<ButtonProps>) => {
            const variantProps: any = {
                  primary: {
                        className: 'bg-brand hover:bg-opacity-80 my-3',
                  },
                  secondary: {
                        className:
                              'bg-brand bg-opacity-20 text-brand hover:bg-brand hover:bg-opacity-10',
                  },
                  danger: {
                        className: 'bg-red hover:bg-opacity-80 text-white',
                  },
                  link: {
                        className: 'text-brand hover:underline',
                  },
                  link_secondary: {
                        className: 'text-gray-1 hover:underline',
                  },
                  border_button: {
                        className:
                              'border-brand uppercase px-5 border-[1px] text-brand-700 hover:opacity-60',
                  },
            }[variant];

            return (props: ButtonProps) => (
                  <WrappedComponent {...props} {...variantProps} />
            );
      };

Button.displayName = 'Button';

export const PrimaryButton: React.FC<ButtonProps> =
      withVariant('primary')(Button);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton: React.FC<ButtonProps> =
      withVariant('secondary')(Button);
SecondaryButton.displayName = 'SecondaryButton';

export const DangerButton: React.FC<ButtonProps> =
      withVariant('danger')(Button);
DangerButton.displayName = 'DangerButton';

export const LinkButton: React.FC<ButtonProps> = withVariant('link')(Button);
LinkButton.displayName = 'LinkButton';

export const LinkSecondaryButton: React.FC<ButtonProps> =
      withVariant('link_secondary')(Button);
LinkSecondaryButton.displayName = 'LinkSecondaryButton';

export const BorderButton: React.FC<ButtonProps> =
      withVariant('border_button')(Button);
BorderButton.displayName = 'BorderButton';
