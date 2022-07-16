import React from 'react';
import Comments from '../icon/Comments';
import Like from '../icon/Like';
import Share from '../icon/Share';
import './PostAuthorStyle.css';


export const PostAuthor = ({ data }) => {

   const { name, photo, nickname, content, image, date } = data
   return (
      <div className='card'>
         <div className='block card__avatar'>
            <div className='img' style={{ background: `url('${photo}') 50% 0%/ cover  no-repeat` }}></div>
         </div>
         <div className='block card__info'>
            <h5 className='card__info-name'> {name} </h5>
            <span className='card__info-nickname'> {nickname}</span>
            <span className='card__info-date'>{date}</span>
            <p className='card__info-content'> {content} </p>
            <div className='card__info-container-image'>
               <img className='card__info-image' src={`${image}`}></img>
            </div>
            <div className='icon'>
               <span style={{ color: "white", fontSize: '24px' }}><Like />558</span>
               <span><Share /></span>
               <span><Comments /></span>
            </div>
         </div>
      </div>
   )
}

export default PostAuthor
