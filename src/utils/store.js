import { create } from "zustand";

const useEvenStore = create((set) => ({
  event: [],
  setEvent: (event) => set(() => ({ event: event })),
}));
export default useEvenStore;
