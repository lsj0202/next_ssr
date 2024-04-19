import { cn } from '@/utils/style';
import { ComponentPropsWithRef, ElementType } from 'react';
import { IconType } from 'react-icons';

type IconButtonProps<Component extends ElementType> =
  ComponentPropsWithRef<Component> & {
    Icon: IconType;
    iconClassName?: string;
    className?: string;
    component?: Component;
  };

const IconButton = <Component extends ElementType = 'button'>({
  component: Component = 'button',
  className,
  iconClassName,
  Icon,
  ...props
}: IconButtonProps<Component>) => {
  return (
    <Component {...props} className={cn(className, 'p-1.5 lg:p-2')}>
      <Icon
        className={cn('h-5, w-5 transition-all lg:h-6 lg:w-6', iconClassName)}
      />
    </Component>
  );
};

export default IconButton;
