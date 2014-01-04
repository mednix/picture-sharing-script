/**
 Adapted by mednix
 Original Credits:https://gist.github.com/funkjedi/5732611
 Usage: Just include this script after Marionette and Handlebars loading
 IF you use require.js add script to shim and describe it in the requirements
*/
(function(Handlebars, Marionette) {

	Marionette.Handlebars = {
		path: 'templates/',
		extension: '.hbs'
	};

	Marionette.TemplateCache.prototype.load = function() {
		if (this.compiledTemplate) {
			return this.compiledTemplate;
		}
		if (Handlebars.templates && Handlebars.templates[this.templateId]) {
			this.compiledTemplate = Handlebars.templates[this.templateId];
		}
		else {
			var template = this.loadTemplate(this.templateId);
			this.compiledTemplate = this.compileTemplate(template);
		}
		return this.compiledTemplate;
	};

	Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
		var template, templateUrl, module, templateName, templateArr=templateId.split("/");
        templateName=templateArr.pop();
        module=templateArr.join("/");

		try {
			template = Marionette.$(templateId).html();
		}
		catch (e) {}
		if (!template || template.length === 0) {
			templateUrl = Marionette.Handlebars.path + module + "/templates/" + templateName+ Marionette.Handlebars.extension;
			Marionette.$.ajax({
				url: templateUrl,
				success: function(data) {
					template = data;
				},
				async: false
			});
			if (!template || template.length === 0){
				throw "NoTemplateError - Could not find template: '" + templateUrl + "'";
			}
		}
		return template;
	};

	Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		return Handlebars.compile(rawTemplate);
	};

}(Handlebars, Backbone.Marionette));