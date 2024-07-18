<template>
    <div class="w-full h-full">
        <h1 class="uppercase text-2xl font-bold flex items-center gap-x-2 text-white">Welcome <p class="text-[#fac608]">Menghouy</p> to page create folder task</h1>
        <div class="w-full h-[90%] flex items-center justify-center">
            <Card class="w-full max-w-xl">
                <CardHeader>
                    <CardTitle class="text-xl font-bold">Create Task</CardTitle>
                </CardHeader>
                <CardContent>
                    <form @submit="onCreatetask">
                        <FormField v-slot="{componentField}" name="tasks">
                            <FormItem>
                                <FormLabel>Task Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Input name task" v-bind="componentField" id="tasks" required/>
                                </FormControl>
                            </FormItem>
                            <FormMessage/>
                        </FormField>
                        <Button class="w-full mt-6" type="submit">
                            Create Task
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';

const checkData=toTypedSchema(z.object({
    tasks:z.string().min(3).max(30,{message:'The name of your task should has under 30 character'})
}));

const form = useForm({
    validationSchema:checkData,
});
const onCreatetask = form.handleSubmit((value)=>{
    console.log(value)
});


</script>

<style lang="scss" scoped>

</style>