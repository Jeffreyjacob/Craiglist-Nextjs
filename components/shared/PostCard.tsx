import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const PostCard = ({post}:{post:any}) => {
    console.log(post)
    return (
        <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">1</span>
            </CardContent>
        </Card>
    )
}

export default PostCard