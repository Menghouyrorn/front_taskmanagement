<template>
  <div class="w-full h-screen">
    <div>
      <h1 class="text-2xl uppercase text-white font-bold">
        Welcome to your Scheldule Task
      </h1>
    </div>
    <div class="w-[98%] m-auto h-full overflow-auto mt-1">
      <div class="w-full h-full flex items-center flex-col gap-y-2 pt-4">
        <div class="">
          <h1 class="text-2xl font-bold text-white">07 Nov 2024</h1>
        </div>
        <div
          class="w-[90%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
          v-for="data in datalast"
          :key="data"
        >
          <p>{{ data.title }}</p>
          <div class="flex gap-x-16 items-center">
            <p>{{ data.end_on }}</p>
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
definePageMeta({
    middleware:'auth'
  })
const check = ref(false);
const token = useCookie('token');

const {data:data}= await useFetch('http://127.0.0.1:8000/api/v1/getalltaskcontent',{
  method:'GET',
  headers:{
    'Authorization':`Bearer ${token.value}`
  }
});

const datalast = data.value.data;

console.log(datalast);

</script>

<style lang="scss" scoped>
</style>