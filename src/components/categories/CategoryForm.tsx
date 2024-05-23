'use client'

import { CreateCategorySchema, createCategorySchema } from '@/lib/validation/categories'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function CategoryForm() {

    const form = useForm<CreateCategorySchema>({
        resolver: zodResolver(createCategorySchema),
        defaultValues: {
            name: "",
            description: ""
        }
    })

    async function handleOnSubmit(input: CreateCategorySchema) {
        const response = await fetch("/api/categories", {
            method: "POST",
            body: JSON.stringify(input)
        })

        if (!response.ok) throw Error("Status code: " + response.status)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g Beverage" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="e.g This is for softfrinks or liquor" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}
