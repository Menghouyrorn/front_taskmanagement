<template>
  <div class="w-full h-screen">
    <h1 class="uppercase text-white font-bold text-2xl">
      Welcome to your folder task : {{ name }}
    </h1>
    <div class="w-full h-full pt-20 flex justify-center">
      <Card class="w-full h-[340px] max-w-lg">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>Create your task here</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="grid gap-y-5">
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
            <Popover>
              <PopoverTrigger as-child>
                <Button
                variant="outline"
                  :class="
                    cn(
                      'w-full justify-start text-left text-black font-normal',
                      !value && 'text-muted-foreground'
                    )
                  "
                >
                  <CalendarIcon class="mr-2 h-4 w-4">{{
                    value
                      ? df.format(value.toDate(getLocalTimeZone()))
                      : "Pick a Date"
                  }}</CalendarIcon>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar v-model="value" initial-focus />
              </PopoverContent>
            </Popover>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "@/lib/utils";

const df = new DateFormatter("en-us", {
  dateStyle: "long",
});
const value = ref<DateValue>();

const route = useRoute();

const name = route.params.taskcreate;
</script>

<style lang="scss" scoped>
</style>