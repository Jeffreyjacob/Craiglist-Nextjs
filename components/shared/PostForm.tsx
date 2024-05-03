'use client'

import Post, { IPost } from '@/lib/database/models/post.modal';
import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PostFormScehma } from '@/lib/Validator';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import FileUploader from './FileUploader';
import DropDown from './DropDown';
import { useUploadThing } from '@/lib/uploadthing';
import { createPost, updatePost } from '@/lib/actions/post.action';
import { useRouter } from 'next/navigation';
import { PostDefaultValues } from '@/types';


type Props = {
  userId: string,
  type: "Create" | "Update",
  post?: IPost,
  postId?: string
}


const PostForm = ({ userId, type, post, postId }: Props) => {
  const [file, setFile] = useState<File[]>([]);
  const { startUpload } = useUploadThing('imageUploader')
  const router = useRouter()
  const initialValue = post && type === 'Update' ? post : PostDefaultValues
  const form = useForm<z.infer<typeof PostFormScehma>>({
    resolver: zodResolver(PostFormScehma),
    defaultValues: initialValue
  })
  async function onSubmit(values: z.infer<typeof PostFormScehma>) {
    console.log(values)
    let uploadedImageUrl = values.imageUrl

    if (file.length > 0) {
      const uploadedImages = await startUpload(file)
      if (!uploadedImages) {
        return
      }
      uploadedImageUrl = uploadedImages[0].url
    }
    if (type === 'Create') {
      try {
        const newPost = await createPost({
          post: { ...values, imageUrl: uploadedImageUrl,isAvaliable:false },
          userId,
          path: '/profile'
        })
        if (newPost) {
          form.reset()
          router.push(`/post/${newPost._id}`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (type === 'Update') {
      if (!postId) {
        router.back()
        return;
      }
      try {
        const updatedPost = await updatePost({
          post:{...values,imageUrl:uploadedImageUrl,_id:postId,isAvaliable:false},
          userId,
          path:`/post/${postId}`
        })
        if(updatedPost){
          form.reset()
          router.push(`/post/${updatedPost._id}`)
        }
      } catch (error) {
        console.log(error)
      }
    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='Post Title' {...field}
                    className='input-field bg-grey-50 h-[50px] rounded-full' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='location' {...field}
                    className='input-field bg-grey-50 h-[50px] rounded-full' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <div className='flex flex-col gap-5 md:flex-row my-5'>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea placeholder='Post Description' {...field}
                    className='textarea' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='imageUrl'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl className='h-72'>
                  <FileUploader onFieldChange={field.onChange}
                    imageUrl={field.value} setFiles={setFile} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-5 md:flex-row my-5'>
          <FormField
            control={form.control}
            name='ItemCondition'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='Item Condition (new or fairly used)' {...field}
                    className='input-field bg-grey-50 h-[50px] rounded-full' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='ItemCategory'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <DropDown className='select-field bg-grey-50 h-[50px] rounded-full px-5' selectValue='Category'
                    value={field.value} onChangeHandler={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='my-5'>
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='$ price' {...field}
                    className='input-field bg-grey-50 h-[50px] rounded-full' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button size='lg' className='button w-full py-7 hover:bg-primary-200' disabled={form.formState.isSubmitting}>
          {
            form.formState.isSubmitting ? (
              'Posting'
            ) : (
              `${type} Post`
            )
          }

        </Button>
      </form>
    </Form>
  )
}

export default PostForm