'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { user } from "@/dummy_data";
import { cn } from "@/lib/utils";
import { Heart, ImageIcon, LockKeyholeIcon, MessageCircleIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Post = ({
  post,
  isSubscribed,
  admin,
}: {
  post: any;
  isSubscribed: boolean;
  admin: any;
}) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className="flex flex-col gap-3 p-3 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src={admin.image || "/user-placeholder.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-semi-bold text-sm md:text-md">
            {admin.name}
          </span>
        </div>
          
        
        <div className="flex gap-2 items-center">
          <p className="text-zinc-400 text-xs md:text-sm tracking-tighter">
            17.06.2024
          </p>
          {admin.id === user.id && (
            <Trash className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer"/>
          )}
        </div>
      </div>
          <p className="text-sm md:text-md">{post.text}</p>

          {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType === 'image' && (
            <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
              <Image 
              src={post.mediaUrl}
              alt="Post Image"
              className="rounded-lg object-cover"
              fill
              />
            </div>
          )}

          {/* TODO Handle this part */}

          {/* {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType === 'video' && ()} */}

          {!isSubscribed && !post.isPublic && (
            <div className="w-full bg-slate-800 relative h-96 rounded-md bg-of flex flex-col justify-center items-center px-5 overflow-hidden">
              <LockKeyholeIcon className="w-16 h-16 text-zinc-100 mb-20 z-0"/>
              <div
              aria-hidden
              className="opacity-60 absolute top-0 left-0 w-full h-full bg-stone-800"
              />
              <div className="flex flex-col gap-2 z-10 border p-2 border-gray-500 w-full rounded">
                <div className="flex gap-1 items-center">
                  <ImageIcon w-4 h-4/>
                  <span className="text-xs ">1</span>
                </div>
                <Link 
                  className={buttonVariants({className:"!rounded-full font-bold text-white",
                  })}
                  href={"/pricing"}
                >
                  Subscribe to Unlock
                </Link>
              </div>
            </div>
          )}

          <div className="flex gap-4 ">
            <div className="flex items-center gap-1">
              <Heart className={cn("w-5 h-5 cursor-pointer", {"fill-red-500": isLiked})} onClick={()=>setIsLiked(!isLiked)}/>
              <span className="text-xs tracking-tighter text-zinc-100">55</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircleIcon className="w-5 h-5 cursor-pointer"/>
              <span className="text-xs tracking-tighter text-zinc-100">11</span>
            </div>
          </div>
    </div>
  );
};

export default Post;
