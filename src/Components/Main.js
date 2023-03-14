import React from 'react'
import list from '../Components/Data'
import Cards from './Cards'

const Main = ({handleClick}) => {
  return (
    <section style={{backgroundColor: 'white', paddingBottom: 30, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)'}}> 
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:80, justifyContent: 'center', padding: 30}}>
     {list.map((item)=>(
        <Cards key={item.id} item={item} handleClick={handleClick}/>
     ))}
     </div>
    </section>
  )
}

export default Main
