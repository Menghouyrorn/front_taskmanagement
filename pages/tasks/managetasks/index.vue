<template>
  <div class="w-full h-full">
    <h1 class="text-3xl uppercase font-bold text-white">Manage Your Tasks</h1>
    <div class="mt-2 w-[99%] h-[90%]">
      <div class="w-[95%] flex justify-end">
        <NuxtLink to="#">
          <Button
            class="flex items-center gap-x-2 justify-center font-bold bg-[#fac608]"
            >Add Task
            <Icon name="material-symbols:add-circle-outline-rounded" size="20"
          /></Button>
        </NuxtLink>
      </div>
      <div
        class="w-[90%] h-full overflow-auto flex flex-col pt-3 gap-y-3 items-center"
      >
        <NuxtLink
          v-for="(datatask, index) in datataskFolder"
          :key="datatask"
          :to="
            /tasks/ +
            'managetasks/' +
            'viewtaskcontent/' +
            datatask.title +
            '-' +
            datatask.id
          "
          class="w-full flex flex-col pt-3 gap-y-3 items-center"
        >
          <div
            class="w-[80%] flex items-center justify-between pl-8 pr-8 h-[10vh] rounded-3xl bg-white shadow"
          >
            <p>{{ datatask.title }}</p>
            <div class="flex justify-center gap-x-16 items-center">
              <p>Create on : {{ datatask.created_at }}</p>
              <DropdownMenu>
                <DropdownMenuTrigger
                  class="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#ca8bfe] transition-all cursor-pointer"
                  as-child
                >
                  <div variant="outline">
                    <Icon name="ic:round-more-vert" size="20" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-[190px] h-[120px]">
                  <div
                    class="p-3 flex w-full flex-col justify-center items-center gap-y-3"
                  >
                    <Dialog>
                      <DialogTrigger as-child>
                        <Button
                          @click="handleOpenDialog(index)"
                          variant="outline"
                          class="w-full"
                        >
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent class="w-full max-w-sm h-[250px]">
                        <DialogHeader>
                          <DialogTitle>Edit Task</DialogTitle>
                        </DialogHeader>
                        <form class="grid gap-4" @submit.prevent="handleEdit()" :model="formdata">
                          <FormField name="taskname">
                            <FormItem>
                              <FormLabel>Task Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  name="taskname"
                                  :v-model:value="formatDate.value.taskname"
                                  placeholder="Input Task name"
                                />
                              </FormControl>
                            </FormItem>
                          </FormField>
                          <Input
                            type="text"
                            name="idtask"
                            :v-model:value="formatDate.value.idtask"
                            class="hidden"
                          />
                          <Button type="submit" class="uppercase">
                            Edit
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <Button class="w-full" @click="handleDelete('1')">
                      Delete
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

    <script setup>
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "~/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

const token = useCookie("token");

const { data: getdatatask } = await useFetch(
  "http://127.0.0.1:8000/api/v1/getalltask",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  }
);
const datataskFolder = getdatatask.value.data;

const handleDelete = (id) => {};

const formdata = ref({});

function handleOpenDialog(index = -1) {
  const item = datataskFolder[index];
  
}

const handleEdit = () => {
  console.log(email.value);
};

definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped>
</style>