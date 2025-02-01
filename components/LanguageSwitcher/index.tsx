"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-aria-components";
import type { PressEvent } from "@react-types/shared";
import { useLanguage } from "@/context/LanguageContext";

interface Coords {
  x: number;
  y: number;
}

interface RippleButtonProps {
  onPress: (e: PressEvent) => void;
  children: React.ReactNode;
}

function RippleButton({ onPress, children }: RippleButtonProps) {
  const [coords, setCoords] = useState<Coords | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePress = (e: PressEvent): void => {
    if (e.pointerType === "mouse" && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const mouseEvent = e as unknown as React.MouseEvent<
        HTMLButtonElement,
        MouseEvent
      >;
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      setCoords({ x, y });
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => setCoords(null), 600);
    } else {
      setCoords({ x: 0, y: 0 });
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => setCoords(null), 600);
    }
    onPress(e);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return (
    <Button
      ref={buttonRef}
      onPressUp={handlePress}
      className="
        bg-blue-500 p-12
        relative overflow-hidden inline-flex items-center justify-center
        rounded-md bg-opacity-80 bg-clip-padding
        border border-white/20 px-3 py-3 text-white text-base
        hover:bg-opacity-60 pressed:bg-opacity-70 transition-colors
        cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75
      "
    >
      {coords && (
        <div
          key={`${coords.x},${coords.y}`}
          className="absolute h-8 w-8 rounded-full opacity-100 bg-white/60"
          style={{
            animation: "ripple 600ms linear",
            left: coords.x - 15,
            top: coords.y - 15,
          }}
        />
      )}
      <span className="flex items-center gap-4">{children}</span>
    </Button>
  );
}

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const buttonText =
    language === "en" ? "日本語に切り替える" : "Switch to English";

  return (
    <RippleButton onPress={() => toggleLanguage()}>{buttonText}</RippleButton>
  );
}
