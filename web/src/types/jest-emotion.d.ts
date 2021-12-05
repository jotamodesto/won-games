/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type { Plugin, NewPlugin } from 'pretty-format'
import type { EmotionMatchers } from '@emotion/jest'

declare global {
  namespace jest {
    type Matchers = EmotionMatchers
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>
