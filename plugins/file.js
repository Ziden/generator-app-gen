var _ = require('lodash');

module.exports = {

    name: 'FILE',

    isValid: function(config) {
        return !!(config && config.out && config.template);
    },

    help: function() {
        return '{ type: "FILE", template: "template file path", out: "file path to output" }';
    },

    write: function(generator, template, out, context) {
        var tplPath = template;

        if (template.indexOf('.') === 0) {
            tplPath = generator.destinationRoot() + '/' + template;
        }

        generator.fs.copyTpl(
            tplPath,

            generator.destinationPath(_.template(out)(generator.values)),

            context);
    }
};
