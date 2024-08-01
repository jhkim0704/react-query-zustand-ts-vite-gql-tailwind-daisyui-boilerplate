export type CommonResponseType<T> = Promise<T | null | undefined>;

export interface DrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
