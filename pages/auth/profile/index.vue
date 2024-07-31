<template>
  <div class="w-full h-full">
    <h1 class="text-3xl text-white font-bold uppercase">Edit Your Profile Here :</h1>
    <div class="w-full flex justify-center ">
      <Card class="w-full pb-16 mt-20 max-w-lg">
        <CardHeader>
          <CardTitle>Edit Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form @submit="handleEditProfile">
            <div class="grid gap-4">
              <div class="w-full grid items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  class="w-[75px] h-[75px] m-auto"
                />
                <input
                  type="file"
                  ref="file"
                  class="hidden"
                  id="selectFileData"
                />
                <div
                  @click="SelectFile()"
                  class="w-[28px] shadow-lg h-[28px] flex items-center justify-center ml-[65px] cursor-pointer -mt-[30px] rounded-full bg-[#ca8bfe] relative"
                >
                  <Icon
                    name="material-symbols:edit-outline"
                    size="16"
                    class="text-white"
                  />
                </div>
              </div>
              <div class="grid gap-2">
                <FormField v-slot="{ componentField }" name="username">
                  <FormItem>
                    <FormLabel>User name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="username"
                        v-bind="componentField"
                        placeholder="username"
                      />
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>
              <div class="grid gap-2">
                <FormField v-slot="{ componentField }" name="email">
                  <FormItem>
                    <FormLabel> Email </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        id="email"
                        v-bind="componentField"
                        placeholder="Your email"
                      />
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>
              <Button type="submit">Edit </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

function SelectFile() {
  const fileselection = document.getElementById("selectFileData");
  fileselection.click();

  fileselection.addEventListener("change", (event) => {
    console.log(event.target.files[0]);
  });
}

const checkdatatype = toTypedSchema(
  z.object({
    username: z.string(),
    email: z.string(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: checkdatatype,
});

const handleEditProfile = handleSubmit((value) => {
  console.log(value);
});
</script>

<style lang="scss" scoped>
</style>