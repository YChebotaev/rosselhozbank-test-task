import { RootState } from "..";

export const createItemLabelSelector = (index: number) => (state: RootState) => state.items.items[index].label
