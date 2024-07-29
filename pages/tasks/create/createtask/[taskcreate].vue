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
import { Button } from "~/components/ui/button";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";

const route = useRoute();

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

const onCreate = handleSubmit((value) => {
  console.log(value);
});

const name = route.params.taskcreate;
</script>

<style lang="scss" scoped>
</style>