<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription
        >Enter your email below to login to your account.</CardDescription
      >
    </CardHeader>
    <CardContent>
      <form @submit="onSumit">
        <div class="grid gap-4">
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel> Email </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    id="email"
                    v-bind="componentField"
                    placeholder="abc@gmail.com"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap2">
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <div class="flex items-center">
                  <FormLabel> Password </FormLabel>
                  <NuxtLink
                    to="#"
                    class="inline-block ml-auto text-sm underline"
                    >for get password</NuxtLink
                  >
                </div>
                <FormControl>
                  <Input
                    type="password"
                    id="password"
                    v-bind="componentField"
                    placeholder="********"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <Button class="w-full" type="submit">Login</Button>
          <Button variant="outline" class="w-full">Login with Google</Button>
        </div>
      </form>
      <div class="mt-4 text-center text-sm">
        Don't has an account?
        <NuxtLink to="#" class="underline">SignUp</NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Button } from "~/components/ui/button";
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const checkdata = toTypedSchema(
  z.object({
    email: z.string().email({ message: "It must be a email" }),
    password: z
      .string()
      .min(8, { message: "The password should has 8 characters" })
      .max(50),
  })
);

const form = useForm({
  validationSchema: checkdata,
});

const onSumit = form.handleSubmit((value) => {
  console.log(value);
});

definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped>
</style>