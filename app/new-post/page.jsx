"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "@style/form.css"

import Form from '@components/Form'

const NewPost = () => {
    const router = useRouter();
    const {data: session } = useSession();

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        title: '',
        description: '',
        make: '',
        model: '',
        year: '',
        price: '',
        km: '',
        displacement: '',
        hp: '',
        color: '',
        image: 'https://www.willow-car-sales.co.uk/wp-content/uploads/2019/11/placeholder-image-1.jpg'
    });

    const createPost = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      try {
        const response = await fetch('/api/post/new/', {
          method: 'POST',
          body: JSON.stringify({
            title: post.title, 
            description: post.description,
            make: post.make,
            model: post.model,
            year: post.year,
            price: post.price,
            km: post.km,
            displacement: post.displacement,
            hp: post.hp,
            color: post.color,
            image: post.image,
            userId: session?.user.id,
          })
        })

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally{
        setSubmitting(false);
      }
    }

  return (
    <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
    />
  )
}

export default NewPost