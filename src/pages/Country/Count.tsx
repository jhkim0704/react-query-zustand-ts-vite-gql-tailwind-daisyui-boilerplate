import { useFishStore } from '@/store/useFishStore'
import { useBearStore } from '@/store/useBearStore'

const Count = () => {
  const { bears, increase } = useBearStore()
  const { fish, increase: increaseFish } = useFishStore()
  const decreaseBear = () => {
    useBearStore.getState().update((state) => {
      state.bears -= 1;
    });
  }
  return (
      <div>
        <div>
          <button className="mr-3 border border-black" onClick={() => increase(1)}>
            click me to increase bear + 1:
          </button>
          <button className="mr-3 border border-black" onClick={() => decreaseBear()}>
            click me to decrease bear - 1:
          </button>
          <span>bear: {bears}</span>
        </div>        
        <button className="mr-3 border border-black" onClick={() => increaseFish(1)}>
          click me to increase fish:
        </button>
        <span>fish: {fish}</span>
      </div>
  );
};

export default Count;
