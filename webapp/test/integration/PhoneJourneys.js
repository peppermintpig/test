jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/umicore/ac/test/test/integration/NavigationJourneyPhone",
		"com/umicore/ac/test/test/integration/NotFoundJourneyPhone",
		"com/umicore/ac/test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

