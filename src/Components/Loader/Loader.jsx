import './Loader.css';
const Loader=()=>{
  return (
    <div className="loader-container">
      <div className="loader">
      </div>
      <div className='loader-text'>
        {"Please wait while we fetch data for you"}
      </div>
    </div>
  );
}

export default Loader;