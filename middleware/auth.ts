export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;
  const user = useSupabaseUser();
  if (!user.value) return navigateTo("/auth#sign-in");
});
