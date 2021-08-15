
import React from 'react'
import Canvas from '../components/Canvas/Canvas'
import style from './scss/CanvasLayout.module.scss'

export const CanvasLayout: React.FC = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.aside}>
            </div>
            <div className={style.main}>
               <Canvas >
                   <div></div>
               </Canvas>
            </div>
            <div className={style.aside}>
            </div>
        </div>
    )
}