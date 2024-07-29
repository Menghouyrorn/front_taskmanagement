<template>
  <div class="w-full h-screen">
    <div>
      <h1 class="text-2xl uppercase text-white font-bold">
        Welcome to your Scheldule Task
      </h1>
    </div>
    <div class="w-[98%] m-auto h-full overflow-auto mt-1">
      <div class="w-full h-full flex items-center flex-col gap-y-2 pt-4">
        <div
          class="w-[90%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
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
          class="w-[90%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
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
          class="w-[90%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
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
const check = ref(false);

</script>

<style lang="scss" scoped>
</style>