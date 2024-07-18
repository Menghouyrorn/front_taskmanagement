<template>
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription
          >Enter your information to create an account</CardDescription
        >
      </CardHeader>
      <CardContent>
        <form @submit="onSignUp">
          <div class="flex gap-x-3">
            <FormField name="fname" v-slot="{ componentField }">
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    v-bind="componentField"
                    placeholder="first name"
                    id="fname"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField name="lname" v-slot="{ componentField }">
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    v-bind="componentField"
                    placeholder="last name"
                    id="lname"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  v-bind="componentField"
                  placeholder="abc@gmail.com"
                  id="email"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  v-bind="componentField"
                  id="password"
                  placeholder="********"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="grid gap-y-4 mt-4">
            <Button class="w-full" type="sumit"> Create an account </Button>
            <Button variant="outline" class="w-full">
              Sign Up with Google
            </Button>
          </div>
        </form>
        <div class="mt-4 text-center">
          Already have an account?
          <NuxtLink to="#" class="underline">Login</NuxtLink>
        </div>
      </CardContent>
    </Card>
</template>

<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";

const checkData = toTypedSchema(
  z.object({
    fname: z.string().min(1, { message: "Input your first name" }),
    lname: z.string().min(1, { message: "Input your last name" }),
    email: z.string().email({ message: "It must be a email" }),
    password: z
      .string()
      .min(8, { message: "You should input 8 character" })
      .max(50),
  })
);

const form = useForm({
  validationSchema: checkData,
});

const onSignUp = form.handleSubmit((value) => {
  console.log(value);
});

definePageMeta({
    layout:'auth'
});

</script>

<style lang="scss" scoped>
</style>