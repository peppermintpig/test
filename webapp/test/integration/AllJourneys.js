jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ObjectSet in the list
// * All 3 ObjectSet have at least one NavObjectToReturn

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/umicore/ac/test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/umicore/ac/test/test/integration/pages/App",
	"com/umicore/ac/test/test/integration/pages/Browser",
	"com/umicore/ac/test/test/integration/pages/Master",
	"com/umicore/ac/test/test/integration/pages/Detail",
	"com/umicore/ac/test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.umicore.ac.test.view."
	});

	sap.ui.require([
		"com/umicore/ac/test/test/integration/MasterJourney",
		"com/umicore/ac/test/test/integration/NavigationJourney",
		"com/umicore/ac/test/test/integration/NotFoundJourney",
		"com/umicore/ac/test/test/integration/BusyJourney",
		"com/umicore/ac/test/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
