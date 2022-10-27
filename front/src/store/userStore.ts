import { StateCreator } from "zustand";

export interface UserSlice {
  id: number;
  increaseBears: () => void;
}
export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  id: 0,
  increaseBears: () => set((state) => ({ id: state.id + 1 })),
});
