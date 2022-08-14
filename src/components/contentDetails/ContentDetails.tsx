import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../../data/data.json'
import styles from './contentDetails.module.css'

type Movie= {
  id:number
  img:string;
  trailer:string;
  sinopsis:string;
  title:string;
  category:string;
  year:string;
  type:string;
}

export const ContentDetails = () => {

const {id} = useParams()
const movie: Movie | undefined = movies.find(item => item.id === Number(id))

  return (
    <div className="container__styles">
        <div className="fluid__container">
            <div className={styles.movie__detail}>
                <div className={styles.movie__text}>
                    <div className={styles.movie__title}>
                        <h3>{movie?.title}</h3>
                        <small>{movie?.year}</small>
                    </div>
                    <p>{movie?.sinopsis}</p>
                    <button className={`btn ${styles.trailer__button}`}>Watch trailer</button>
                </div>
                <div className={styles.movie__poster}>
                    <img src={movie?.img} alt="" />
                </div>
                {/* <div className={styles.movie__video}>
                    <iframe 
                        src={movie?.trailer}
                        className={styles.video_container}
                         title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen  
                    ></iframe>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}
