import Spinner from 'react-bootstrap/Spinner';
import '../../general.css'
import '../Spinner/Spinner.css'

function Loading() {
  return (
   <div className='containerSpinner'>
     <Spinner  animation="border" role="status" variant="primary" style={{width:'30px',height:'30px' }}></Spinner>
   </div>
  );
}

export default Loading;