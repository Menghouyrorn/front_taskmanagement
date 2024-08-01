<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" class="w-full"> Edit </Button>
    </DialogTrigger>
    <DialogContent class="w-full max-w-sm h-[250px]">
      <DialogHeader>
        <DialogTitle>Edit Task</DialogTitle>
      </DialogHeader>
      <form class="grid gap-4">
        <FormField v-slot="{ componentField }" name="taskname">
          <FormItem>
            <FormLabel>Task Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                v-bind="componentField"
                placeholder="Input Task name"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <Button type="submit" class="uppercase"> Edit </Button>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
</script>

<style lang="scss" scoped>
</style>