import create from "zustand";
import { devtools } from "zustand/middleware";
import { UserSlice, createUserSlice } from "./userStore";

export type StoreState = UserSlice;

export const useStore = create<StoreState>()(
  devtools((...a) => ({
    ...createUserSlice(...a),
  }))
);
