import { defineStore } from "pinia";

interface UserPayloadInterface {
  username?: string;
  email?: string;
  password?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authentication: false,
    loading: false,
    currentUser: [],
  }),
  persist: true,
  actions: {
    async AuthLoginUser({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch(
        "http://127.0.0.1:8000/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value.code == 0) {
        const token = useCookie("token");
        token.value = data?.value.token;
        this.authentication = true;
        this.currentUser = data?.value.data;
      } else {
        this.authentication = false;
      }
    },

    LogOutUser() {
      const token = useCookie("token");
      this.authentication = false;
      token.value = null;
      this.currentUser = [];
    },
  },
  getters: {
    currentUserDat: (state) => state.currentUser,
  },
});
