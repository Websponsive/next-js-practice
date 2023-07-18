"use client"

import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import "@style/car-page.css"

const page = ({ params }) => {


  const [post, setPost] = useState({
    title: '-',
    description: '-',
    make: '-',
    model: '-',
    year: '-',
    price: '-',
    km: '-',
    displacement: '-',
    hp: '-',
    color: '-',
    image: 'https://www.willow-car-sales.co.uk/wp-content/uploads/2019/11/placeholder-image-1.jpg'
});

  useEffect(() => {
    const getDetails = async () => {
        const response = await fetch(`/api/post/${params.id}`);
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
    if(params.id) getDetails()
}, [params.id])

  return (
    <>
        <img src={post.image} alt="Photo of the car" />
        <section className="head">
          <h1 className="dark small-header">{post.title}</h1>
          <h2 className="dark header">${post.price}</h2>
          <p className="paragraph dark">{post.description}</p>
        </section>
        <section className="specs">
          <div className="spec">
            <h3 className='dark paragraph'>Year</h3>
            <p className='dark paragraph'>{post.year}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Make</h3>
            <p className='dark paragraph'>{post.make}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Model</h3>
            <p className='dark paragraph'>{post.model}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Kilometers</h3>
            <p className='dark paragraph'>{post.km}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Displacement</h3>
            <p className='dark paragraph'>{post.displacement}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Horsepower</h3>
            <p className='dark paragraph'>{post.hp}</p>
          </div>
          <div className="spec">
            <h3 className='dark paragraph'>Color</h3>
            <p className='dark paragraph'>{post.color}</p>
          </div>
        </section>
    </>
  )
}

export default page