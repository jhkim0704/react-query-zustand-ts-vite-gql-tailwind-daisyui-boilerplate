import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
  update: (fn: (draft: BearState) => void) => void
}

export const useBearStore = create<BearState>()(
  devtools(
    set => ({
      bears: 0,
      increase: by => set(state => ({ bears: state.bears + by })),
      update: fn => set(state => {
        const nextState: BearState = { ...state }
        fn(nextState)
        return nextState
      }),
    }),
    {
      store: 'Bear',
      name: 'Bear',
    },
  ),
)
