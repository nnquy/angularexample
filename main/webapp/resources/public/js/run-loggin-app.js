///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Defines the javascript files that need to be loaded and their dependencies.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require.config({
    paths: {
        angular: '../../libs/angular/angular',
        angularMessages: '../../libs/angular-messages/angular-messages',
        csrfInterceptor: '../../libs/spring-security-csrf-token-interceptor/dist/spring-security-csrf-token-interceptor.min',
        lodash: "../../libs/lodash/dist/lodash",
        editableTableWidgets: 'editable-table-widgets',
        common: 'common',
        loginApp: 'login'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        csrfInterceptor: {
            deps: ['angular']
        },
        angularMessages: {
            deps: ['angular']
        },
        editableTableWidgets: {
            deps: ['angular', 'lodash']
        },
        common: {
          deps: ['angular', 'csrfInterceptor', 'angularMessages','editableTableWidgets']
        },
        loginApp: {
            deps: [ 'common']
        }
    }
});

require(['loginApp'], function () {

    angular.bootstrap(document.getElementById('loginApp'), ['loginApp']);

});