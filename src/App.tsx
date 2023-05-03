import Hls from 'hls.js'
import { useEffect, useRef } from 'react'
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
// import ffmpeg_core_path from '@ffmpeg/core/dist/ffmpeg-core.js?url'
// const ffmpeg = createFFmpeg({ corePath: ffmpeg_core_path, log: true })

// ;(async () => {
//   await ffmpeg.load()
//   console.log(ffmpeg)
// })()

const source = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'


export const App = ({ msg }: { msg?: string }) => {
  const videoElem = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoElem.current!
    if (Hls.isSupported()) {
      const hls = new Hls({ debug: true })
      hls.loadSource(source)
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        video.muted = true
        video.play()
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source
      video.addEventListener('canplay', function () {
        video.play()
      })
    }
  }, [])

  return (
    <div>
      <p>{msg ?? 'hello'}</p>
      <video ref={videoElem} controls autoPlay></video>
    </div>
  )
}
