import React from 'react'
import { useSignIn } from "@clerk/clerk-react"


const SocialAuthButtons = ({ strategies }) => {
  const { signIn } = useSignIn()
  
  const signInWithStrategy = (strategy) => {
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/#/sso-callback",
      redirectUrlComplete: "/#/signin-redirect",
    })
  }

  return (
    <>
      {
        strategies.map((strategy) => {
          const provider = strategy.replace("oauth_", "")
          return (
            <button 
              key={strategy} 
              className="sign-in-page__button"
              onClick={() => signInWithStrategy(strategy)} >
                Sign in with {provider}
          </button>
          )
        })
      }
    </>
  );
}

export default SocialAuthButtons