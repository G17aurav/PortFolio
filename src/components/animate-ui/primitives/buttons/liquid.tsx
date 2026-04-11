'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

import { Slot, type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';
import { cn } from '@/lib/utils';

type LiquidButtonProps = WithAsChild<
  HTMLMotionProps<'button'> & {
    delay?: string;
    fillHeight?: string;
    hoverScale?: number;
    tapScale?: number;
  }
>;

function LiquidButton({
  delay = '0.3s',
  fillHeight = '3px',
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  className,
  ...props
}: LiquidButtonProps) {
  const Component = asChild ? Slot : motion.button;

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold backdrop-blur-sm',
        className,
      )}
      whileTap={{ scale: tapScale }}
      whileHover={{
        scale: hoverScale,
        color: 'var(--liquid-button-hover-text-color, #111827)',
        borderColor: 'var(--liquid-button-color, #ffffff)',
        '--liquid-button-fill-width': '100%',
        '--liquid-button-fill-height': '100%',
        '--liquid-button-delay': delay,
        transition: {
          '--liquid-button-fill-width': { duration: 0 },
          '--liquid-button-fill-height': { duration: 0 },
          '--liquid-button-delay': { duration: 0 },
        },
      }}
      style={
        {
          '--liquid-button-fill-width': '-1%',
          '--liquid-button-fill-height': fillHeight,
          '--liquid-button-delay': '0s',
          color: 'var(--liquid-button-text-color, #f9fafb)',
          background:
            'linear-gradient(var(--liquid-button-color, #ffffff) 0 0) no-repeat calc(200% - var(--liquid-button-fill-width, -1%)) 100% / 200% var(--liquid-button-fill-height, 0.2em)',
          backgroundColor:
            'var(--liquid-button-background-color, rgb(75 85 99 / 0.42))',
          border:
            '1px solid var(--liquid-button-border-color, rgb(156 163 175 / 0.5))',
          transition: `background ${delay} var(--liquid-button-delay, 0s), color ${delay} var(--liquid-button-delay, 0s), border-color ${delay} calc(${delay} - var(--liquid-button-delay, 0s)), background-position ${delay} calc(${delay} - var(--liquid-button-delay, 0s))`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { LiquidButton, type LiquidButtonProps };
