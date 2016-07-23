if (Meteor.isClient) {
    this.lock = {};
    self      = this;
    Meteor.startup(function () {
        Meteor.call('getAuth0Attributes', function (error, res) {
            // Instantiate lock as soon as the getAuth0Attributes Meteor method
            // returns.
            self.lock = new _Auth0Lock(res.AUTH0_CLIENTID, res.AUTH0_DOMAIN);

            self.lock.on("authenticated", function (authResult) {
                self.lock.getProfile(authResult.idToken, function (err, profile) {
                    if (err) {
                        console.log('Cannot get user :(', err);
                        return;
                    }

                    Accounts.callLoginMethod({
                        methodArguments: [{
                            auth0: {
                                profile: profile,
                                token: authResult.idToken
                            }
                        }]
                    });
                });
            });
            
        });
    });
}
