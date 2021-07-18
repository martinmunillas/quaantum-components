import { useRef, useEffect, useState } from 'react';

/**
 *
 * @param initial true if the element should be scrollable
 * @returns a tuple of 3 functions where the the first one toggles the scroll,
 * the second activates the scroll and the third deactivates the scroll
 */
export const useToggleScroll = (initial = true) => {
  const [scroll, setScroll] = useState(initial);
  const scrollY = useRef(0);

  const activateScroll = () => setScroll(true);
  const deactivateScroll = () => setScroll(false);
  const toggleScroll = () => setScroll(!scroll);

  useEffect(() => {
    if (!scroll) {
      scrollY.current = window.scrollY;
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.position = 'fixed';
      /* width of the scroll bar */
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo({ top: scrollY.current });
    }
  }, [scroll]);

  return [toggleScroll, activateScroll, deactivateScroll] as const;
};
