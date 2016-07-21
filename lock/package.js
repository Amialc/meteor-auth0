'use strict';

Package.describe({
    name         : 'auth0:lock',
    version      : '0.6.0',
    summary      : 'Auth0 Lock for Meteor',
    git          : 'https://github.com/auth0/meteor-auth0.git',
    documentation: 'README.md'
});

Npm.depends({
    "auth0-lock": "10.0.0-rc.2",
    "events"    : "1.1.1",
    "util"      : "0.10.3"
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.1');
    api.use(['ecmascript', 'accounts-base', 'accounts-oauth', 'underscore']);
    api.addFiles(['auth0-lock.js'], 'client');
    api.addFiles(['auth0-lock.server.js'], 'server');
    api.addFiles(['auth0-lock.common.js']);

    api.export('lock', 'client');
});
