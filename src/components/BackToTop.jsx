import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const BackToTop = () => {
  return (
    <Button href="#" variant="primary" size="lg" className="btn-lg-square back-to-top">
      <FontAwesomeIcon icon={faArrowUpLong} />
    </Button>
  )
}

export default BackToTop
