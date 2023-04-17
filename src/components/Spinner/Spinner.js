import Spinner from 'react-bootstrap/Spinner';
import '../../general.css'
import '../Spinner/Spinner.css'

function Loading() {
  return (
    <Spinner  animation="border" role="status" variant="primary" style={{width:'60px',height:'60px' }}>
      {/* <span className="visually-hidden textColorPpal ">Loading...</span> */}
    </Spinner>
  );
}

export default Loading;