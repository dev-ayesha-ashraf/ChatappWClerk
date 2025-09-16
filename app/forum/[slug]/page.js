'use client'

import ChatForum from '@/app/components/ChatForum';

export default async function Page({ params }) {
    const { slug } = await params
    return <ChatForum />
}