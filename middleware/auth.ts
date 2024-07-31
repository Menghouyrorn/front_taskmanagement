import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authentication, currentUserDat } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    authentication.value = true;
  }

  if (token.value && to?.name == "/auth/signin") {
    console.log('home')
    return navigateTo('/')
  }

  if (!token.value && to?.name !== "/auth/signin") {
    abortNavigation();
    console.log('login')
    return navigateTo('/auth/signin')
  }
});
