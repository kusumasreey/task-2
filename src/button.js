import './App.css';
import plusImage from './plus-image.jpg';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div>
        <Link to={'/form'}>
          <center>
          <button className='btn-sm'>
            <img src={plusImage} alt="Add Icon" className='image'/>
          </button>
          </center>
        </Link>
    </div>
  );
}

export default Button;



