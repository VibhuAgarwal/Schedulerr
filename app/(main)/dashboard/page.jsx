'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usernameSchema } from '@/app/lib/validators';
import { useEffect } from 'react';
import useFetch from '@/hooks/use-fetch';
import { updateUsername } from '@/actions/users';
import { BarLoader } from 'react-spinners';

const Dashboard = () => {
    const { isLoaded, user } = useUser();
    const {
        register, 
        handleSubmit, 
        setValue, 
        formState:{errors},
    } = useForm({
        resolver:zodResolver(usernameSchema),
    });

    useEffect(() => {
        setValue('username', user?.username)
    },[isLoaded]);

    const {loading, error, fn: fnUpdateUsername} = useFetch(updateUsername);

    const onSubmit = async (data) => {
        fnUpdateUsername(data.username);
    }

    return (
        <div className='space-y-8'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Welcome, <span className='font-bold text-blue-600'>{user?.firstName} {user?.lastName} ❤️</span>
                    </CardTitle>
                </CardHeader>
                {/* Latest Updates */}
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Your unique Link</CardTitle>
                </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <span>{window?.location.origin}/</span>
                                    <Input {...register('username')} placeholder="username"/>
                                </div>
                                {errors.username && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.username.message}
                                    </p>)}
                                    {error && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {error.message}
                                    </p>)}

                            </div>
                            {loading && (<BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>)}
                            <Button type='submit'>Update Username</Button>
                        </form>
                    </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard;
