
/**
 * Debounce method to avoid repetative  call
 */
export const debounce = (fn: any, time: number) => {
  let timer: number;
  return function(...args: any[]) {
    const func = () => fn.call({}, args[0]);
    clearTimeout(timer);
    timer = window.setTimeout(func, time);
  };
};
