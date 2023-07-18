"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import "@style/form.css"

import Form from '@components/Form'

const EditPost = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const postId = searchParams.get('id');
    console.log(postId);
    const {data: session} = useSession();

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

    useEffect(() => {
        const getDetails = async () => {
            const response = await fetch(`/api/post/${postId}`);
            const data = await response.json();
            setPost ({
                title: data.title,
                description: data.description,
                make: data.make,
                model: data.model,
                year: data.year,
                price: data.price,
                km: data.km,
                displacement: data.displacement,
                hp: data.hp,
                color: data.color,
                image: data.image
            })

        } 
        if(postId) getDetails()
    }, [postId])

    const editPost = async (e) => {
      e.preventDefault();
      setSubmitting(true);
      if (!postId) {
        return alert('Prompt Id Not Found !')
      }
      try {
        const response = await fetch(`/api/post/${postId}`, {
          method: 'PATCH',
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
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={editPost}
    />
  )
}

export default EditPost