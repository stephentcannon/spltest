SinglePageLogin.config({
  loginTitle: 'Single page login',
  signupTitle: 'Single page sign up',
  forgotPasswordTitle: 'Retrieve password',
  canRetrievePassword: true,
  passwordSignupFields: 'EMAIL_ONLY',
  forbidClientAccountCreation: false,
  routeAfterLogin: '/',
  routeAfterSignUp: '/',
  routeAfterLogout: '/login',
  forceLogin: true,
  exceptRoutes: ['dashboard']
});