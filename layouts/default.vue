<template>
  <div>
    <div class="flex bg-[#a18aff]">
      <div class="w-[20%] h-screen bg-white">
        <div class="flex items-center pl-6 gap-x-4 h-[18%]">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              class="w-[56px] rounded-full"
              alt=""
            />
          </div>
          <div>
            <p class="font-semibold">Do-It</p>
            <p class="text-[#a18aff]">Menghouy Rorn</p>
          </div>
        </div>
        <div
          class="w-[80%] flex m-auto"
          style="border-bottom: 3px solid #a18aff"
        />
        <div class="h-[88%] pl-6 mt-14">
          <div>
            <NuxtLink to="/" class="cursor-pointer hover:text-[#a18aff]">
              <div class="flex gap-x-3">
                <Icon name="material-symbols:house" size="24" />
                <p class="font-semibold">Home</p>
              </div>
            </NuxtLink>
          </div>
          <Accordion
            type="single"
            class="w-full border-none"
            :default-value="defaultValue"
            collapsible
          >
            <AccordionItem value="item-1" class="border-none">
              <div class="flex items-center gap-x-3">
                <Icon name="uil:schedule" size="24" />
                <AccordionTrigger class="flex items-start"
                  >Task Todays</AccordionTrigger
                >
              </div>
              <div class="pl-9 flex gap-y-0 flex-col">
                <NuxtLink
                  to="/tasks/personal"
                  class="cursor-pointer hover:text-[#fac608]"
                  ><AccordionContent class="flex items-center gap-x-2">
                    <div class="h-[8px] w-[8px] bg-[#fac608] rounded-full" />
                    Personal</AccordionContent
                  ></NuxtLink
                >
                <NuxtLink
                  to="/tasks/work"
                  class="cursor-pointer hover:text-[#fac608]"
                >
                  <AccordionContent class="flex items-center gap-x-2">
                    <div class="h-[8px] w-[8px] bg-[#fac608] rounded-full" />
                    Work</AccordionContent
                  ></NuxtLink
                >
                <NuxtLink
                  to="/tasks/create"
                  class="cursor-pointer hover:text-[#a18aff]"
                >
                  <AccordionContent class="flex items-center gap-x-1">
                    <div>
                      <Icon
                        size="12"
                        name="material-symbols:add-circle-outline"
                      />
                    </div>
                    Add filter</AccordionContent
                  ></NuxtLink
                >
              </div>
            </AccordionItem>
          </Accordion>
          <div>
            <NuxtLink to="/tasks/scheduletask" class="cursor-pointer hover:text-[#a18aff]">
              <div class="flex gap-x-3">
                <Icon name="icon-park-solid:schedule" size="24" />
                <p class="font-semibold">Schedule task</p>
              </div>
            </NuxtLink>
          </div>
          <div class="mt-4">
            <NuxtLink to="#" class="cursor-pointer hover:text-[#a18aff]">
              <div class="flex gap-x-3">
                <Icon
                  name="material-symbols:settings-account-box-outline-sharp"
                  size="24"
                />
                <p class="font-semibold">Setting</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-[80%] pl-6 pt-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const defaultValue = "item-1";

  </script>



<style lang="scss" scoped>
</style>