import React from "react";
import "./signIn.css"

class SignIn extends React.Component{
    render(){
      const {onRouteChange} = this.props
      return(
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bs">
          <main className="pa4 black-80">
              <div className="measure center">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                  <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input className="pa2 input-reset ba input-bg hover-bg-black hover-white w-100" 
                      type="email" name="email-address"  id="email-address"/>
                  </div>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input className="b pa2 input-reset ba input-bg hover-bg-black hover-white w-100" 
                      type="password" name="password"  id="password"/>
                  </div>
                  <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                  </fieldset>
                  <div className="">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" value="Sign in" onClick={(route)=>onRouteChange("home")}/>
                  </div>
                  <div className="lh-copy mt3">
                  <p className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  onClick={()=> onRouteChange("register")}>Register</p>
                  <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                  </div>
              </div>
          </main>
        </article>
      )
    }
}

export default SignIn