'use client'

import {useState, useEffect} from 'react'
import Card from './Card'
import Image from 'next/image'

const CardList = ({data, handleClick}) => {
    return(
        <div className="card-list">
            {data.map((post) => (
                <Card
                    key={post._id}
                    id={post._id}
                    post={post}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);
    const handleSearch = (e) => {

    }

    useEffect(() => {
      const fetchCards = async () => {
        const response = await fetch('/api/post')
        const data = await response.json();
        setPosts(data);
      }

      fetchCards();
    }, [])
    
  return (
    <section className="feed">
        <form action="" className="search">
            <Image
                src="assets/search.svg"
                width={30}
                height={30}
            />
            <input 
                type="text" 
                placeholder='Search for cars, users, specs...'
                required
                value={searchText}
                onChange={handleSearch}
                className='small-text'
            />
        </form>
        <CardList
            data={posts}
            handleClick={() => {}}
        />
    </section>
  )
}

export default Feed