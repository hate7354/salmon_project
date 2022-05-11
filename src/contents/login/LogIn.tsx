import LoginView from "components/auth/login/Login";
const LogIn = (props: { session: String }) => {
  let auth;
  if (props.session === "on") {
    auth = <LoginView />;
  }
  return auth;
};

export default LogIn;
