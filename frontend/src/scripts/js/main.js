// console.log(window.location.pathname, window.localStorage.getItem("token"));
const redirectCheck = () => {
  if (
    (window.location.pathname !== "/" ||
      window.location.pathname !== "/login" ||
      window.location.pathname !== "/register") &&
    !window.localStorage.getItem("token")
  ) {
    // return window.location.replace("/");
  } else if (window.location.pathname === ("/" || "/login" || "/register")) {
    if (window.localStorage.getItem("token")) {
      return window.location.replace("/dashboard");
    }
    // return window.location.replace("/dashboard")
  }
};

const logout = (event) => {
  event.preventDefault();
  window.localStorage.removeItem("token");
  window.location.replace("/");
  console.log("out");
};

// fuction calls
redirectCheck();