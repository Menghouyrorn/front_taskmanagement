<template>
  <div class="w-full h-screen">
    <h1 class="uppercase text-white font-bold text-2xl">
      Welcome to your folder task : {{ name }}
    </h1>
    <div class="w-full h-[85%] pt-20 flex justify-center">
      <Card class="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>Create your task here</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="grid gap-y-5" @submit="onCreate">
            <FormField v-slot="{ componentField }" name="taskname">
              <FormItem>
                <FormLabel>Task name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="input the task name"
                    v-bind="componentField"
                    required
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormField>
            <FormField v-slot="{ componentField }" name="startdate">
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    id="startdate"
                    v-bind="componentField"
                    placeholder="select Star date"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="enddate">
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Select Date"
                    v-bind="componentField"
                    id="enddate"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button class="w-full" type="submit">Create</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
import { Button } from "~/components/ui/button";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Post } from "~/services";

const route = useRoute();

const name = route.params.nametask;
const id = route.params.id;

const checkdata = toTypedSchema(
  z.object({
    taskname: z.string(),
    startdate: z.string(),
    enddate: z.string(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: checkdata,
});

const token = useCookie("token");

const onCreate = handleSubmit((value) => {
  Post({
    url: "http://127.0.0.1:8000/api/v1/createtaskcontent",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    data: {
      task_id: id,
      title: value.taskname,
      issuccess: 1,
      start_on: value.startdate,
      end_on: value.enddate,
    },
  })
    .then((res) => {
      navigateTo(`/tasks/${name}-${id}`);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(value);
});
</script>

<style lang="scss" scoped>
</style>