"use client";

import "@style/profile.css";
import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/Profile'

const ProfilePage = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [posts, setPosts] = useState([]);

  const fetchCards = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`)
    const data = await response.json();
    setPosts(data);
  }

  if (session?.user.id) {
    fetchCards();
  }
  

  const handleEdit = (post) => {
    router.push(`/edit-post?id=${post._id}`)
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post ?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id}` ,{
          method: 'DELETE'
        })
        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts)
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Profile
      name="My"
      desc="Welcome to your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default ProfilePage