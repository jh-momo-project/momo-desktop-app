import create from "zustand";

interface IState {}

const useStore = create<IState>((set) => ({
  // state, method 정의
}));

export default useStore;
