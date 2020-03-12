export const ARROW_UP = 'ArrowUp';
export const ARROW_DOWN = 'ArrowDown';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT= 'ArrowRight';
export const SPACE = 'Space'
export const ENTER = 'Enter';


export function removeClassName(element, className) {
    if (!element.className) return;
    element.className = element.className
      .split(" ")
      .filter(x => x !== className)
      .join(" ");
  }
  
  export function addClassName(element, className) {
    if (element && element.className.includes(className)) return;
    element.className += ` ${className}`;
    element.className = element.className.trim();
  }
  
