import './ErrComp.css'
import yellow from '../../assets/Rectangle_yellow.png'
import purple from '../../assets/Rectangle_purple.png'
import blue from '../../assets/Rectangle_blue.png'
import grey from '../../assets/Rectangle_grey.png'

const ErrComp = () => {
  return (
    <div className='err_container'>
        <div className="timeout">
        <img src={yellow} alt="yellow_dot" className="dot" />
        <div className="letters">
          <span>Error 500: 1 256</span>
        </div>
      </div>
      <div className="timeout">
        <img src={purple} alt="purple_dot" className="dot" />
        <div className="letters">
          <span>Error 501: 800</span>
        </div>
      </div>
      <div className="timeout">
        <img src={blue} alt="blue_dot" className="dot" />
        <div className="letters">
          <span>Error 502: 650</span>
        </div>
      </div>
      <div className="timeout">
        <img src={grey} alt="grey_dot" className="dot" />
        <div className="letters">
          <span>Other: 330</span>
        </div>
      </div>
    </div>
  )
}

export default ErrComp