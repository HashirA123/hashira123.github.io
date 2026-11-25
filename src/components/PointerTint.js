import { useEffect, useRef } from "react";

function PointerTint() {
  const tint = useRef(null);

  useEffect(() => {
    const layer = tint.current;
    const pointerEffects = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let frame = 0;

    function clearTint() {
      window.cancelAnimationFrame(frame);
      frame = 0;
      delete layer.dataset.visible;
    }

    function moveTint(event) {
      if (event.pointerType !== "mouse" || !pointerEffects.matches) return;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        layer.style.setProperty("--pointer-x", `${event.clientX}px`);
        layer.style.setProperty("--pointer-y", `${event.clientY}px`);
        layer.dataset.visible = "";
        frame = 0;
      });
    }

    function leaveWindow(event) {
      if (!event.relatedTarget) clearTint();
    }

    window.addEventListener("pointermove", moveTint, { passive: true });
    window.addEventListener("pointerout", leaveWindow);
    window.addEventListener("blur", clearTint);
    pointerEffects.addEventListener("change", clearTint);

    return () => {
      window.removeEventListener("pointermove", moveTint);
      window.removeEventListener("pointerout", leaveWindow);
      window.removeEventListener("blur", clearTint);
      pointerEffects.removeEventListener("change", clearTint);
      clearTint();
    };
  }, []);

  return <div className="pointer-tint" aria-hidden="true" ref={tint} />;
}

export default PointerTint;
