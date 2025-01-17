export interface EaseItem {
  style: string
  fn: EaseFn
}
interface EaseMap {
  [key: string]: EaseItem
}

export interface EaseFn {
  (t: number): number
}

export const ease: EaseMap = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function (t: number) {
      return 1 + --t * t * t * t * t
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function (t: number) {
      return t * (2 - t)
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function (t: number) {
      return 1 - --t * t * t * t
    }
  }
}
