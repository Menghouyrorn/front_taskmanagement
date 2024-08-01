import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authentication, currentUserDat } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    authentication.value = true;
  }

  if (token.value && to?.path == "/auth/signin") {
    console.log('Hello');
    return navigateTo('/')
    
  }

  if (!token.value && to?.path !== "/auth/signin") {
    abortNavigation();
    console.log('login')
    return navigateTo('/auth/signin')
  }
});
