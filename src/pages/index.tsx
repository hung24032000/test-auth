import type { NextPage } from 'next';
import { useSession,signOut } from 'next-auth/react';
import Link from 'next/link';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const session = useSession()
  return (
  <div>
      {session?.data && (
        <>
          <h1>Xin chào {session?.data?.user?.name} </h1>
          <h2 onClick={()=>{
            signOut()
          }}>
            Đăng xuất
          </h2>
        </>
      )}
      {!session?.data &&
        <h1>Đăng nhập &nbsp;
          <Link href='/login'>
            <a>
              tại đây
            </a>
          </Link>
        </h1>}
         <h1>
      Hello {t('header')}
      <button onClick={() => setLanguage('vi')}>Go to Home</button>
      <button onClick={() => setLanguage('en')}>Go to Home</button>
    </h1>
    </div>

  );
};

export default Home;
