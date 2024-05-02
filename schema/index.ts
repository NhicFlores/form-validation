import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'please enter a valid email address'
    }),
    name: z.string().min(1, {
        message: 'please enter your name'
    }),
    password: z.string().min(6, {
        message: 'password must be at least 6 characters long'
    }),
    confirmPassword: z.string().min(6, {
        message: 'passwords do not match'
    }),
})
//use bcrypt for matching passwords on server side 
//this does allow the form to be submitted - we should come up with client side validation for this 

export const LogInSchema = z.object({
    email: z.string().email({
        message: 'please enter a valid email address'
    }),
    password: z.string().min(6, {
        message: 'password must be at least 6 characters long'
    }),
})