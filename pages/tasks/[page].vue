<template>
  <div class="w-full h-screen">
    <h1 class="uppercase text-white font-bold text-2xl">
      Welcome to your folder task : {{ name }}
    </h1>

    <div class="w-full h-[90%] flex items-center justify-center">
      <div class="h-full w-[80%] bg-slate-300 overflow-auto">
        <Card class="w-full max-w-lg">
          <CardContent>
            <form>
              <FormField v-slot="{ componentField }" name="taskname">
                <FormItem>
                  <FormLabel>Task Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="input the task name"
                      id="taskname"
                      v-bind="componentField"
                      required
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </FormField>
              <FormField v-slot="{ componentField }" name="datestart">
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Select date start"
                      id="datestart"
                      v-bind="componentField"
                      required
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </FormField>  
              <FormField v-slot="{ componentField }" name="dateend">
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Select date end"
                      id="dateend"
                      v-bind="componentField"
                      required
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </FormField>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

let name = route.params.page;
</script>

<style lang="scss" scoped>
</style>