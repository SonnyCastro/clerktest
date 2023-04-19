import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import {
  ClerkProvider,
  AuthenticateWithRedirectCallback,
  SignedOut,
  SignedIn,
} from "@clerk/clerk-react";
import SocialAuthButtons from "./SocialAuthButtons"
import SignInRedirect from "./SignInRedirect"
import './App.css';

const clerkPubKey = "pk_test_YXdhcmUtc3BhbmllbC03OC5jbGVyay5hY2NvdW50cy5kZXYk"
const clerkFrontendApi = "https://aware-spaniel-78.accounts.dev/default-redirect"
const strategies = [
  "oauth_google", 
  "oauth_twitter",
  "oauth_discord"
]

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={clerkPubKey} frontendApi={clerkFrontendApi}>
        <Switch>
        {/* Define a / route that displays the OAuth button */}
        <Route path="/">
          <SignedOut>
            <SocialAuthButtons strategies={strategies}/>
          </SignedOut>
          <SignedIn>
            <>
              <div>
                <h1>You are signed in!</h1>
              </div>
            </>
          </SignedIn>
        </Route>
        <Route path="/signin-redirect">
          <SignInRedirect />
        </Route>
        
          {/* Define a /sso-callback route that handle the OAuth redirect flow */}
        <Route path="/sso-callback">
          {/* Simply render the component */}
          <AuthenticateWithRedirectCallback />
        </Route>
        </Switch>
      </ClerkProvider>
    </Router>
    
  );
}

export default App;

