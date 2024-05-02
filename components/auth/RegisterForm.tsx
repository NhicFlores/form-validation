//keep pages as server components, but tag their components as client components 
//define children in component props interface as React.ReactNode, but don't need 
//to assign in component element, the component just can't be empty -> just put a temp div
'use client'

import CardWrapper from './CardWrapper'
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from '../ui/form'

 import { RegisterSchema } from '@/schema'
 import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        }
    })

    const { pending } = useFormStatus();

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setLoading(true);
        console.log(data);
        //backend/db logic 
    }
    //handle submit is a form method that takes a callback function - it is only called once form is validated 

    //FormField creates a controlled component 
    //controlled component means the state is handled within the component and not by the react DOM 
    //use hook form uses state for us 
    //form.control "stores" that state 
    //name corresponds to the schema and default values 
    //uncontrolled component - NOTE TODO: 
  return (
    <CardWrapper
    header="Register"
    label="Create an account"
    backButtonHref="/auth/login"
    backButtonLabel="Already have an account? Log In"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-4'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='email' placeholder='name@youdomain.com'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='...'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='password' placeholder='***'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Confirm Password
                            </FormLabel>
                            <FormControl>
                                <Input {...field} type='password' placeholder='***'/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
            <Button type='submit' className='w-full' disabled={pending}>
                {loading ? "Loading..." : "Register"}
            </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm
