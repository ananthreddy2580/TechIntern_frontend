import { create } from "zustand";

 export const useToggleStore = create((set) => ({
  isSubmitted: false,

  // This will toggle the value (true → false → true → ...)
  toggleIsSubmitted: () =>
    set((state) => ({ isSubmitted: !state.isSubmitted })),
}));

