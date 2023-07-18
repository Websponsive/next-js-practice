'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import '@style/card.css'

const Card = ({ post, handleDelete, handleEdit, id}) => {
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();


  const handleClick = () => {
    if(pathName === '/profile') return
    router.push(`/post/${id}`)
  }

  return (
    <div className='post-card' onClick={handleClick}>
        <img src={post.image} alt="image of this car" />
        <div className="text">
            <h2 className="paragraph dark">{post.title}</h2>
            <p className="small-text dark-gray">Year
              <span>{post.year}</span>
            </p>
            <p className="small-text dark-gray">Displacement
              <span>{post.displacement}cm3</span>
            </p>
            <p className="small-text dark-gray">Power
              <span>{post.hp}hp</span>
            </p>
            <p className="small-text dark-gray">Kilometers
              <span>{post.km}km</span>
            </p>
            <h3 className="title dark">${post.price}</h3>
        {session?.user.id === post.creator._id &&
        pathName === '/profile' && (
          <div className="buttons">
            <button
              className='plain-btn'
              onClick={handleEdit}
              aria-label='Edit this post'>
                <Image
                  src="/assets/edit.svg"
                  width={30}
                  height={30}
                  alt='edit icon'
                />
            </button>
            <button
              className='plain-btn'
              onClick={handleDelete}
              aria-label='Delete this post'>
                <Image
                  src="/assets/delete.svg"
                  width={30}
                  height={30}
                  alt='trash can icon'
                />
            </button>
          </div>
        )}
        </div>

    </div>

  )
}

export default Card