<template>
    <div class="w-full h-screen">
      <h1 class="uppercase text-white font-bold text-2xl">
    folder task : <span class="uppercase text-[#fac608] font-bold text-2xl">{{ name }}</span>
      </h1>
  
      <div class="w-full h-[100%]">
        <div class="w-full flex justify-between p-4 pl-0">
          <h1 class="text-xl font-bold text-white uppercase">This your Task:</h1>
          <div>
            <NuxtLink :to="`/tasks/create/createtask/${name}-${id}`">
              <Button
                class="flex items-center gap-x-2 justify-center font-bold bg-[#fac608]"
                >Add Task
                <Icon
                  name="material-symbols:add-circle-outline-rounded"
                  size="20"
              /></Button>
            </NuxtLink>
          </div>
        </div>
  
        <div v-if="folderdata.length != 0">
          <div
            class="w-full h-[80%] flex flex-col items-center gap-y-4 pr-[30px]"
          >
            <div
              v-for="datafolder in folderdata"
              :key="datafolder"
              class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
            >
              <p>{{ datafolder.title }}</p>
              <div class="flex gap-x-16 items-center">
                <p>{{ datafolder.end_on }}</p>
                <FormField
                  v-slot="{ valuecheck, handleChange }"
                  name="checkdata"
                  type="checkbox"
                >
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        class="text-green-400"
                        :checked="valuecheck"
                        @update:checked="handleChange"
                      />
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="w-full h-[70%] grid items-center justify-center">
          <h1 class="text-center text-4xl uppercase text-gray-600 font-bold">
            Not Found
          </h1>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
  } from "~/components/ui/select";
  import { FormItem, FormField, FormControl } from "~/components/ui/form";
  import { useForm } from "vee-validate";
  import * as z from "zod";
  import { toTypedSchema } from "@vee-validate/zod";
  import { Checkbox } from "~/components/ui/checkbox";
  definePageMeta({
    middleware: "auth",
  });
  const token = useCookie("token");
  const route = useRoute();
  
  
  
  const makeDatacondition = toTypedSchema(
    z.object({
      progress: z.string(),
    })
  );
  
  const form = useForm({
    validationSchema: makeDatacondition,
  });
  
  const onChangeData = form.handleSubmit((value) => {
    console.log(value);
  });
  
  let name = route.params.taskname;
  const id = route.params.id;
  
  const { data: getOneFolder } = await useFetch(
    `http://127.0.0.1:8000/api/v1/gettask/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  
  const folderdata = getOneFolder.value.data.findtask_content;
  console.log(folderdata);
  </script>
  
  <style lang="scss" scoped>
  </style>