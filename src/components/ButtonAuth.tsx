import { signIn } from 'next-auth/react';

interface Props {
    name: string,
    id: string,
    color: string,
}

export const ButtonAuth = ({id,name,color}:Props) => (
  <button 
    onClick={()=>{
        signIn(id)
    }} 
    className="btn"
    style={{color:color}}
  >  
    {name}
  </button>
);
