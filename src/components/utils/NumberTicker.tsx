"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue } from "framer-motion";

type NumberTickerProps = {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
};

export const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
}: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const startValue = direction === "down" ? value : 0;
      const endValue = direction === "down" ? 0 : value;
      const duration = 1000;
      const intervalTime = 16;
      const totalFrames = Math.round(duration / intervalTime);
      const stepValue = (endValue - startValue) / totalFrames;

      setTimeout(() => {
        let currentFrame = 0;
        const interval = setInterval(() => {
          currentFrame++;
          motionValue.set(motionValue.get() + stepValue);

          if (currentFrame >= totalFrames) {
            clearInterval(interval);
            motionValue.set(endValue);
          }
        }, intervalTime);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => 
    motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
          useGrouping: true,
        }).format(latest);
      }
    }),
    [motionValue, decimalPlaces]
  );

  return (
    <span ref={ref} />
  );
};