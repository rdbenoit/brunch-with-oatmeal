exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'javascripts/app.js': /^app/,
                'javascripts/vendor.js': /^vendor/,
                'test/javascripts/test.js': /^test[\\/](?!vendor)/,
                'test/javascripts/test-vendor.js': /^test[\\/](?=vendor)/
            },
            order: {
                before: [
                    'vendor/scripts/console-helper.js',
                    'vendor/scripts/jquery-1.8.3.js',
                    'vendor/scripts/underscore-1.4.3.js',
                    'vendor/scripts/backbone-0.9.9.js'
                ],
                after: [
                    "test/vendor/scripts/test-helper.js"
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'stylesheets/app.css': /^(app|vendor)/,
                'test/stylesheets/test.css': /^test/
            },
            order: {
                before: [
                    "vendor/styles/normalize-2.0.1.css",
                    "vendor/styles/bootstrap.css",
                    "vendor/styles/bootstrap-responsive.css",
                    "vendor/styles/font-awesome.css"
                ],
                after: [
                ]
            }
        },
        templates: {
            joinTo: "javascripts/app.js"
        }
    },
    server : {
        path:"server.js",
        port:8080,
        base:"/labs",
        run:true
    }
};