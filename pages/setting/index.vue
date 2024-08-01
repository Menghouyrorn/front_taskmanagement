<template>
  <div class="w-[70%] h-[95%] m-auto rounded-md bg-white">
    <div class="w-[90%] h-[90%] m-auto pt-2">
      <div
        class="py-3 w-full flex items-center pl-1 gap-x-2"
        style="border-bottom: 2px solid #ca8bfe"
      >
        <Icon
          name="material-symbols:account-circle"
          size="30"
          class="text-[#ca8bfe]"
        />
        <h1 class="font-bold text-[#ca8bfe]">Setting</h1>
      </div>
      <NuxtLink to="/auth/profile">
        <div
          class="py-3 flex justify-between pl-2 mt-2 hover:bg-gray-200 cursor-pointer rounded-sm transition-all pr-1"
        >
          <h1 class="font-semibold text-[#717082]">Edit Profile</h1>
          <Icon
            name="material-symbols-light:arrow-forward-ios"
            size="24"
            class="text-[#ca8bfe]"
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/auth/profile/changepassword">
        <div
          class="py-3 flex justify-between pl-2 mt-2 hover:bg-gray-200 cursor-pointer rounded-sm transition-all pr-1"
        >
          <h1 class="font-semibold text-[rgb(113,112,130)]">Change Password</h1>
          <Icon
            name="material-symbols-light:arrow-forward-ios"
            size="24"
            class="text-[#ca8bfe]"
          />
        </div>
      </NuxtLink>
      <div
        class="py-4 flex justify-between items-center hover:bg-gray-200 pl-2 mt-2 transition-all cursor-pointer pr-1 rounded-sm"
      >
        <h1 class="text-[#717082] font-semibold">Dark / Light</h1>
        <FormField name="dark_light">
          <FormItem>
            <FormControl>
              <Switch id="airplane-mode" />
            </FormControl>
          </FormItem>
        </FormField>
      </div>
      <div
        class="py-3 w-full pl-1 flex gap-x-2 items-center"
        style="border-bottom: 2px solid #ca8bfe"
      >
        <Icon name="ph:notification-bold" size="30" class="text-[#ca8bfe]" />
        <h1 class="text-[#ca8bfe] font-bold">Tasks</h1>
      </div>
      <NuxtLink to="/tasks/managetasks">
        <div
          class="py-3 flex justify-between pl-2 mt-2 hover:bg-gray-200 cursor-pointer rounded-sm transition-all pr-1"
        >
          <h1 class="font-semibold text-[rgb(113,112,130)]">
            Manage Tasks
          </h1>
          <Icon
            name="material-symbols-light:arrow-forward-ios"
            size="24"
            class="text-[#ca8bfe]"
          />
        </div>
      </NuxtLink>
      <div
        class="py-3 flex w-full pl-1 gap-x-2 items-center"
        style="border-bottom: 2px solid #ca8bfe"
      >
        <Icon name="circum:circle-more" size="30" class="text-[#ca8bfe]" />
        <h1 class="text-[#ca8bfe] font-bold">More</h1>
      </div>
      <div
        class="py-4 flex justify-between items-center hover:bg-gray-200 pl-2 mt-2 transition-all cursor-pointer pr-1 rounded-sm"
      >
        <h1 class="font-semibold text-[#717080]">Language</h1>
        <Icon
          name="material-symbols-light:arrow-forward-ios"
          size="24"
          class="text-[#ca8bfe]"
        />
      </div>
      <div
        class="py-4 flex justify-between items-center hover:bg-gray-200 pl-2 mt-2 transition-all cursor-pointer pr-1 rounded-sm"
      >
        <h1 class="font-semibold text-[#717080]">Country</h1>
        <Icon
          name="material-symbols-light:arrow-forward-ios"
          size="24"
          class="text-[#ca8bfe]"
        />
      </div>
      <NuxtLink @click="SingOutUser">
        <div
          class="py-4 flex justify-between items-center hover:bg-gray-200 pl-2 mt-2 transition-all cursor-pointer pr-1 rounded-sm"
        >
          <h1 class="font-semibold text-[#717080]">LogOut</h1>
          <Icon
            name="material-symbols-light:arrow-forward-ios"
            size="24"
            class="text-[#ca8bfe]"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import { Switch } from "~/components/ui/switch";
import { useAuthStore } from "~/store/auth";

const router = useRouter();

const { LogOutUser } = useAuthStore();

const SingOutUser = () => {
  LogOutUser();
  router.push("/auth/signin");
};
</script>

<style lang="scss" scoped>
</style>