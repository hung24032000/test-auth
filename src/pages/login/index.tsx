import { ButtonAuth } from '@/components/ButtonAuth'
import { getProviders } from 'next-auth/react'
import Head from 'next/head'

interface Props {
  providers: {
    facebook:Provider,
    google:Provider,
  }
}
interface Provider {
  callbackUrl: string,
  id:string,
  name:string,
  signinUrl: string,
  type: string
}
const Login = ({ providers }: Props) => {
  return (
    <div style={{minHeight:'100vh'}}>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
      </Head>
      
      <div className="login-container">
          <div className="list-auth">
              <ButtonAuth id={providers?.facebook?.id}  name={providers?.facebook?.name} color='red'  />
              <ButtonAuth id={providers?.google?.id}  name={providers?.google?.name} color='red' />
          </div>
      </div>  
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }, // will be passed to the page component as props
  }
}

export default Login
