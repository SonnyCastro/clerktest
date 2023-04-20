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

const clerkPubKey = "pk_test_cm9tYW50aWMtc3dhbi0zMS5jbGVyay5hY2NvdW50cy5kZXYk"
const clerkFrontendApi = "https://romantic-swan-31.clerk.accounts.dev"
const strategies = [
  "oauth_google", 
  "oauth_twitter",
  "oauth_discord"
]

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Switch>
          {/* Define a / route that displays the OAuth button */}
          <Route exact path="/">
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
          <Route exact path="/signin-redirect">
            <SignInRedirect />
          </Route>
          
            {/* Define a /sso-callback route that handle the OAuth redirect flow */}
          <Route exact path="/sso-callback">
            {/* Simply render the component */}
            <AuthenticateWithRedirectCallback />
          </Route>
        </Switch>
      </ClerkProvider>
    </Router>
  );
}

export default App;

