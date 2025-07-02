import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [ posts, setPosts ] = useState([]) 

  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then( res => res.json() )
    .then( res => {
      setPosts(res.posts)
      console.log(res.posts)
    })
  }, [])

  

  return (
    <div className=''>
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        {posts?.map((doc, index) => (
          <Card key={index} body={doc.body} user={doc.userId} views={doc.views} likes={doc.reactions.likes}/>
        ))}
      </div>
    </div>
  )
}

export default App
