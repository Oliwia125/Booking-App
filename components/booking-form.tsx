"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DateRangePicker } from "./date-range-picker"
import { CalendarIcon, Search } from "lucide-react"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { createBooking } from "./actions"

const formSchema = z.object({
  where: z.string().min(2, {
    message: "Choose your destination.",
  }),
  stayDate: z.any(),
  guests: z.string().min(1, {
    message: "Choose number of guests.",
  }).max(10, {
    message: "Maximum number of guests is 10."
  }),
})

export function BookingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          where: "",
          guests: "",
        },
      })

     async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const data = {
            title: "test",
            userId: Math.random(),
            location: values.where,
            checkIn: values.stayDate.from,
            checkOut: values.stayDate.to,
            numberGuests: values.guests
            }
            await createBooking(data)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="conatiner mx-auto flex items-center border-b-2 px-6 py-2 h-24">


      <div className='grow'>
       <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
        <ul className='flex gap-6 items-center'>
          <li className="grid w-full max-w-sm items-center gap-1.5">

          <FormField
          control={form.control}
          name="where"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where</FormLabel>
              <FormControl>
                <Input type="text" id="location" placeholder="Type your destination" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> </li>

          <li className="grid w-full max-w-sm items-center gap-1.5">
        <FormField
          control={form.control}
          name="stayDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your stay date</FormLabel>
              <FormControl>
              
              <div className={cn("grid gap-2")}>
      <Popover >
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {field.value?.from ? (
              field.value.to ? (
                <>
                  {format(field.value.from, "LLL dd, y")} -{" "}
                  {format(field.value.to, "LLL dd, y")}
                </>
              ) : (
                format(field.value.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={field.value?.from}
            selected={field.value}
            onSelect={field.onChange}
            numberOfMonths={2}
          
          />
        </PopoverContent>
      </Popover>
    </div>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> </li>


<li className="grid w-full max-w-sm items-center gap-1.5">
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who</FormLabel>
              <FormControl>
              <Input type="number" min='1' max='10' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> </li>


          <li className='grid max-w-sm items-center gap-1.5 relative -bottom-2'><Button type="submit"><Search /></Button></li> 
        </ul>
       </div>
     </div>
      {/* <div className='flex grow items-center justify-end sm:hidden'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text" className='justify-center'>Search now</Label>
          <Input type="text" id="text" placeholder="Type your destination"/></div>
      </div> */}


      </form>
    </Form>
  )
}
