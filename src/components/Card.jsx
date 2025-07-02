import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoChatbubbleOutline, IoHeartOutline, IoPaperPlaneOutline } from 'react-icons/io5'

const Card = (props) => {
  return (
    <div className='rounded px-3 py-3'>
        <div className='flex items-center gap-2'>
            <div className='w-9 rounded-full aspect-square bg-amber-950'>
            </div>
            <h1>{props.user}</h1>
        </div>
        <div className='w-full rounded-xl overflow-hidden my-2 bg-black'>
            <img src="https://dummyimage.com/1080x1080" alt="" />
        </div>
        <div className='text-2xl flex gap-2'>
            <IoHeartOutline />
            <h1 className='text-base'>{props.likes}</h1>
            <IoChatbubbleOutline />
            <h1 className='text-base'>{props.views}</h1>
            <IoPaperPlaneOutline />
        </div>
        <h1>{props.body}</h1>
    </div>
  )
}

export default Card