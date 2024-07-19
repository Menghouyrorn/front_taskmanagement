<template>
  <div class="w-full h-screen">
    <h1 class="uppercase text-white font-bold text-2xl">
      Welcome to your folder task : {{ name }}
    </h1>

    <div class="w-full h-[100%]">
      <div class="w-full flex justify-between p-4 pl-0">
        <h1 class="text-xl font-bold text-white uppercase">This your Task:</h1>
        <div>
          <NuxtLink :to="`/tasks/create/createtask/${name}`">
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
      <div class="w-full h-[80%] flex flex-col items-center gap-y-4 pr-[30px]">
        <div
          class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
        >
          <p>Task create website task management</p>
          <div class="flex gap-x-16 items-center">
            <p>26/01/20204</p>
            <div v-if="check" class="flex items-center" @click="check = false">
              <Icon
                class="text-green-500"
                name="material-symbols:check-circle-outline-rounded"
                size="22"
              />
            </div>
            <div
              @click="check = true"
              v-else
              class="w-[18px] h-[18px] bg-white rounded-full"
              style="border: 2px solid #717082"
            />
          </div>
        </div>
        <div
          class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
        >
          <p>Task create website task management</p>
          <div class="flex gap-x-16 items-center">
            <p>26/01/20204</p>
            <div v-if="check" class="flex items-center" @click="check = false">
              <Icon
                class="text-green-500"
                name="material-symbols:check-circle-outline-rounded"
                size="22"
              />
            </div>
            <div
              @click="check = true"
              v-else
              class="w-[18px] h-[18px] bg-white rounded-full"
              style="border: 2px solid #717082"
            />
          </div>
        </div>
        <div
          class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
        >
          <p>Task create website task management</p>
          <div class="flex gap-x-16 items-center">
            <p>26/01/20204</p>
            <div v-if="check" class="flex items-center" @click="check = false">
              <Icon
                class="text-green-500"
                name="material-symbols:check-circle-outline-rounded"
                size="22"
              />
            </div>
            <div
              @click="check = true"
              v-else
              class="w-[18px] h-[18px] bg-white rounded-full"
              style="border: 2px solid #717082"
            />
          </div>
        </div>
        <div
          class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
        >
          <p>Task create website task management</p>
          <div class="flex gap-x-16 items-center">
            <p>26/01/20204</p>
            <div v-if="check" class="flex items-center" @click="check = false">
              <Icon
                class="text-green-500"
                name="material-symbols:check-circle-outline-rounded"
                size="22"
              />
            </div>
            <div
              @click="check = true"
              v-else
              class="w-[18px] h-[18px] bg-white rounded-full"
              style="border: 2px solid #717082"
            />
          </div>
        </div>
        <div
          class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
        >
          <p>Task create website task management</p>
          <div class="flex gap-x-16 items-center">
            <p>26/01/20204</p>
            <div v-if="check" class="flex items-center" @click="check = false">
              <Icon
                class="text-green-500"
                name="material-symbols:check-circle-outline-rounded"
                size="22"
              />
            </div>
            <div
              @click="check = true"
              v-else
              class="w-[18px] h-[18px] bg-white rounded-full"
              style="border: 2px solid #717082"
            />
          </div>
        </div>
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

const route = useRoute();

const check = ref(false);
let data = ref("");

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

let name = route.params.page;
</script>

<style lang="scss" scoped>
</style>