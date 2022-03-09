import { IToDo } from "./atoms";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedToDos = localStorage.getItem(key);
    if (savedToDos != null) {
      setSelf(JSON.parse(savedToDos));
    }
    onSet((newToDos: IToDo[], _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newToDos));
    });
  };
