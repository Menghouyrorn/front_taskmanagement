<template>
    <div class="w-full h-full">
        <h1 class="text-3xl text-white font-bold uppercase">Change Password</h1>
        <div class="w-full flex mt-16 justify-center">
            <Card class="w-full max-w-lg pb-10">
                <CardHeader>
                    <CardTitle>Change Your Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form @submit="handleChangePassword">
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <FormField v-slot="{componentField}" name="email">
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="email" id="email" v-bind="componentField" required placeholder="your email"/>
                                        </FormControl>
                                    </FormItem>
                                </FormField>
                            </div>
                            <div class="grid gap-2">
                                <FormField v-slot="{componentField}" name="newpassword">
                                    <FormItem>
                                        <FormLabel>
                                            New Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="password" id="newpassword" v-bind="componentField" placeholder="new password" required/>
                                        </FormControl>
                                    </FormItem>
                                </FormField>
                            </div>
                            <div class="grid gap-2">
                                <FormField v-slot="{componentField}" name="cofpassword">
                                    <FormItem>
                                        <FormLabel>Comfirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" id="cofpassword" v-bind="componentField" placeholder="Confirm password" required/>
                                        </FormControl>
                                    </FormItem>
                                </FormField>
                            </div>
                            <Button type="submit">Change</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<script setup>
import * as z from 'zod';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const checkdataType = toTypedSchema(z.object({
    email:z.string(),
    newpassword:z.string().min(2,{message:'Password shout has 8 character'}).max(50),
    cofpassword:z.string().min(2,{message:'Password shout has 8 character'}).max(50),
}));

const {handleSubmit} = useForm({
    validationSchema:checkdataType
});

const handleChangePassword = handleSubmit((value)=>{
    console.log(value);
});



</script>

<style lang="scss" scoped>

</style>