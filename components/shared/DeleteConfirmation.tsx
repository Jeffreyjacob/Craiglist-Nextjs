"use client"

import React, { useTransition } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { TrashIcon } from '@heroicons/react/24/outline';
import { DeletePost } from '@/lib/actions/post.action';
import { usePathname } from 'next/navigation';
  

const DeleteConfirmation = ({postId}:{postId:string}) => {
  const pathname = usePathname();
  let [isPending,startTransition] = useTransition();
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <TrashIcon className='w-[22px] h-[22px] cursor-pointer text-red-600'/>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete ?</AlertDialogTitle>
        <AlertDialogDescription>
        This will be permanently delete this Post
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className='bg-primary-400' onClick={()=>startTransition( async ()=>{
          await DeletePost({postId,path:pathname})}
        )}  >Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default DeleteConfirmation