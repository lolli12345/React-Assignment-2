import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Posts.css'

  

function Posts(){

   
    return (
        <div className='posts'>
            <h1 >Latest Posts</h1>
            <p>Filter by Category</p>
            <div className='filter'>
                <div className='innerFilter'>
                <div className='all'>
                    <p>All</p>
                </div>
                <div className='filterBox'>
                    <p>Artificial Intelligence</p>
                </div>
                <div className='filterBox'>
                <p>Cloud Computing</p>
                </div>
                <div className='filterBox'>
                <p>DevOps</p>
                </div>
                <div className='filterBox'>
                <p>Programming Language</p>
                </div>
                <div className='filterBox'>
                <p>Technology and Tools</p>
                </div>
                <div className='filterBox'>
                <p>Get Job in a Tech Company</p>
                </div>
                <div className='filterBox'>
                <p>Mobile Application Development</p>
                </div>
                <div className='filterBox'>
                    <p>Others</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Posts;