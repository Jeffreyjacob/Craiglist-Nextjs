import React from 'react';
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
  

const DeleteConfirmation = () => {
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
        <AlertDialogAction className='bg-primary-400'>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default DeleteConfirmation