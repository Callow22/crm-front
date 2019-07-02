var oLogin = {
  sel: {
    loginBtn: "#login-btn",
    loginError: "#login-error"
  },
  data: {
    email: $("#email"),
    password: $("#password")
  },
  init: function() {
    oLogin.login();
  },
  login: function() {
    $(oLogin.sel.loginBtn).on("click", function() {
      var credentials = {
        email: oLogin.data.email.val(),
        password: oLogin.data.password.val()
      };
      console.log(credentials);
      api.users.login
        .post(credentials)
        .then(function(res) {
          console.log(res);
          localStorage.setItem("token", res.token);
          switch (res.role) {
            case "assistant":
              location.assign("/alllead.html");
              break;

            case "seller":
              location.assign("lead.html");
              break;
          }
        })
        .catch(function(err) {
          console.log("here");
          $(oLogin.sel.loginError).show();
        });
    });
  }
};

oLogin.init();
