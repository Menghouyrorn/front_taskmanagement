<template>
  <div class="w-full h-screen">
    <div>
      <h1 class="text-2xl uppercase text-white font-bold">
        Welcome to your Scheldule Task
      </h1>
    </div>
    <div class="w-[98%] m-auto h-[95vh] overflow-auto mt-1">
      <div class="w-full h-full">
        <div class="w-full h-full flex items-center flex-col gap-y-4 pt-3" >
          <div
            class="w-[90%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
            v-for="data in datalast" :key="data"
          >
            <p>{{ data.title }}</p>
            <div class="flex gap-x-16 items-center">
              <p>Task For This : {{ data.start_on }}</p>
              <FormField v-slot="{ value, handleChange }" name="checkdata">
                <FormItem>
                  <FormControl>
                    <Checkbox :checked="value" @update:checked="handleChange" />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import { Checkbox } from "~/components/ui/checkbox";
import { formatDate } from "../../../utils/dateFormatter";

const check = ref(false);
const token = useCookie("token");

const { data: data } = await useFetch(
  "http://127.0.0.1:8000/api/v1/getalltaskcontent",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  }
);

const datalast = data.value.data;

let dateFormate = ref("");
for (let i = 0; i < datalast.length; i++) {
  onMounted(() => {
    let datetimeString = datalast[i]["start_on"];
    dateFormate.value = formatDate(datetimeString);
  });
}
console.log(dateFormate);
</script>

<style lang="scss" scoped>
</style>