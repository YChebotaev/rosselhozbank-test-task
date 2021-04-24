import { RootState } from "..";

export const createItemValueSelector = (index: number) => (state: RootState) => state.items.items[index].value
