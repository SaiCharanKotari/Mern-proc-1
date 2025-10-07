import toast from 'react-hot-toast';

function RateLimited(){
  return(
    <div>
      <h1>{toast.error('Failes to Load Notes')}</h1>
    </div>
  );
}

export default RateLimited