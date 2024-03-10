import React from 'react'
import { useRef } from 'react'
import './VideoPlayer.css'
import clg_video from '../../assets/clg-video.mp4'


const VideoPlayer = ({playState, setPlayState}) => {


    const player = useRef(null)


    function closePlayer(e) {

        if(e.target === player.current){
            setPlayState(false)
        }
        
    }
  return (
    <div className={`video-player ${playState? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={clg_video} muted autoPlay controls></video>
    </div>
  )
}

export default VideoPlayer