import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} className="img" alt="thumbnail" />}
      backgroundColor="#ffff"
    >
      {close => (
        <>
          <div className="video-player">
            <button
              className="popup-close-btn"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} width={500} height={300} />
          </div>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
