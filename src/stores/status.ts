import { defineStore } from "pinia";

export const useStatusStore = defineStore({
  id: "status",
  state: () => ({
    isLogin: false,
  }),
  persist: {
    enabled: true
  },
  getters: {
    login: (state) => state.isLogin
  },
  actions: {
    Login(is: boolean | null = null) {
      if (is == null) {
        return this.isLogin;
      }
      else {
        this.isLogin = is;
      }
    },
  },
});
