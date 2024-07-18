<template>
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>For get password</CardTitle>
        <CardDescription>Enter the email and new password</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="onForGetPassword">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your email"
                  id="email"
                  v-bind="componentField"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="new password"
                  id="password"
                  v-bind="componentField"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="confpassword">
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  id="confpassword"
                  v-bind="componentField"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="w-full mt-4"> Change Password </Button>
        </form>
        <div class="flex mt-4 gap-x-4">
          <NuxtLink to="#" class="underline">Alert has account?</NuxtLink>
          <NuxtLink to="#" class="underline ml-auto"
            >Don't has account?</NuxtLink
          >
        </div>
      </CardContent>
    </Card> 
</template>

<script setup>
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

const checkdatatype = toTypedSchema(
  z.object({
    email: z.string().email({ message: "It must be a email" }),
    password: z
      .string()
      .min(8, { message: "Password should has 8 character" })
      .max(50),
    confpassword: z
      .string()
      .min(8, { message: "Password should has 8 character" })
      .max(50),
  })
);

const form = useForm({
  validationSchema: checkdatatype,
});

const onForGetPassword = form.handleSubmit((value) => {
  console.log(value);
});

definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped>
</style>