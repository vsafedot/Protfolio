declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
  }
}
