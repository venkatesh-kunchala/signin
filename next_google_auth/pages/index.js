import styles from '../styles/Home.module.css'
import { signIn, signOut,useSession } from "next-auth/client";


export default function Home() {
  const [session] = useSession();

  console.log(session);

  return (
    <div className={styles.container}>
      
      {!session && (<>
        <button onClick={()=> signIn()}>Signin</button>
      </>)}
      
      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div>
            <h4>Email: {session.user.email}</h4>
            <br/>
            {session.user.image && (
              <img src={session.user.image} alt={session.user.name}/>
            )}
          </div>
          <br/>
          <br/>
          <button onClick={()=> signOut()}>Signout</button>
        </>
      )}
    </div>
  )
}
