'use client'

import { AlertModal } from '@/components/modal/alert-modal'
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Rating } from '@/components/ui/rating'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { horoscopeMessages } from '@/constants/admin/horoscope'
import useSubmit from '@/hooks/use-submit'
import { DailyFormProps } from '@/interface/horoscope-props'
import { cn } from "@/lib/utils"
import { DailyFormValues, dailyFormSchema } from '@/schemas/horoscope'
import DailyService from '@/services/horoscope/daily-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from "date-fns"
import { on } from 'events'
import { CalendarIcon, HeartIcon } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const CompatibilityForm: React.FC<DailyFormProps> = ({
    initialData,
    horoscopes,
    userId,
}) => {

    const [onDeleteModal, setOnDeleteModal] = React.useState(false)

    const form = useForm({
        resolver: zodResolver(dailyFormSchema),
        defaultValues: {
            ...initialData,
            authorId: userId,
            horoscopeId: '',
            story: "",
            date: new Date(),
            familyDescription: "",
            familyRating: 0,
            loveDescription: "",
            loveRating: 0,
            healthDescription: "",
            healthRating: 0,
            careerDescription: "",
            careerRating: 0,
            friendshipDescription: "",
            friendshipRating: 0,
            moneyDescription: "",
            moneyRating: 0,
            happinessDescription: "",
            happinessRating: 0,
            travelDescription: "",
            travelRating: 0,
        }
    })

    const { handleSubmit, loading } = useSubmit<DailyFormValues>(
        async (data) => {
            if (initialData) {
                return await DailyService.updateDailyHoroscope({ id: initialData.id, data })
            }
            else {
                return await DailyService.createDailyHoroscope({ data })
            }
        },
        {
            loadingMessage: initialData ?
                horoscopeMessages.dailyUpdatingLoading :
                horoscopeMessages.dailyCreatingLoading,
            errorMessage: horoscopeMessages.dailyError,
            successMessage: initialData ?
                horoscopeMessages.dailyUpdated :
                horoscopeMessages.dailyCreated
        }, {
        redirectTo: '/admin/horoscope'
    }
    )

    const handleDelete = async () => {
        if (initialData) {
            return await DailyService.deleteDailyHoroscope({ id: initialData.id })
        }
    }

    return (
        <>
            <AlertModal
                isOpen={onDeleteModal}
                onClose={() => setOnDeleteModal(false)}
                onConfirm={handleDelete}
                loading={loading}
            />
            <div className=' w-full p-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <div className='flex col-span-2 md:col-span-1 w-full'>
                            <FormField
                                control={form.control}
                                name="horoscopeId"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel className='text-md p-2'>Horoscope</FormLabel>
                                        <Select disabled={loading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue defaultValue={field.value} placeholder='Select a horoscope' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {horoscopes?.map((horoscope) => (
                                                    <SelectItem key={horoscope.id} value={horoscope.id}>{horoscope.sign}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='flex col-span-2 md:col-span-1 w-full'>
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col w-full'>
                                        <FormLabel className='text-md px-2'>Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full mt-0 justify-start text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}

                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='flex flex-col col-span-2 w-full relative'>
                            <FormField
                                control={form.control}
                                name="story"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Story</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-32 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's family horoscope brings a wave of joy and prosperity. The stars align to create a harmonious environment in your household. A surprise visit from a distant relative will bring back fond memories and laughter. It's a perfect day to reconnect and share stories from the past. Open communication will be key in resolving any lingering issues. Embrace the spirit of unity and understanding, and let the positive energy flow within your family. Remember, every conversation is a chance to learn and grow together." {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="familyDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Family Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's family horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="familyRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="loveDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Love Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's love horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="loveRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="healthDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Health Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's health horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="healthRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="careerDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Career Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's career horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="careerRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="friendshipDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Friendship Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's friendship horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="friendshipRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="moneyDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Money Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's money horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="moneyRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex-col flex col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="happinessDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Happiness Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's happiness horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="happinessRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex-col flex col-span-2 md:col-span-1 w-full relative'>
                            <FormField
                                control={form.control}
                                name="travelDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md p-2'>Travel Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className='min-h-24 md:min-h-auto'
                                                disabled={loading}
                                                placeholder="Today's travel horoscope reveals a time of harmony and bonding. Open communication will strengthen your relationships and bring about a sense of unity and understanding" {...field} />
                                        </FormControl>
                                        <FormMessage className='px-2' />
                                    </FormItem>
                                )}
                            />
                            <div className='absolute top-1 right-2'>
                                <FormField
                                    control={form.control}
                                    name="travelRating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Rating
                                                    Icon={<HeartIcon />}
                                                    variant='destructive'
                                                    rating={field.value}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='px-2' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* <div className='flex col-span-2 w-full my-2'>
                            <Button
                                type='submit'
                                disabled={loading}
                                className='ml-auto'
                            >
                                {initialData ? horoscopeMessages.dailyUpdate : horoscopeMessages.dailyCreate}
                            </Button>
                        </div> */}
                        {initialData ?
                            <div className='flex col-span-2 w-full my-2'>
                                <Button
                                    variant="destructive"
                                    onClick={() => setOnDeleteModal(true)}
                                    disabled={loading}
                                    className=''
                                >
                                    {horoscopeMessages.dailyDelete}
                                </Button>
                            </div> :
                            null
                        }

                    </form>
                </Form>
            </div>
        </>
    )
}

export default CompatibilityForm;