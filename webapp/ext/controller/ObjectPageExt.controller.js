sap.ui.define(
  ["sap/suite/ui/generic/template/extensionAPI/extensionAPI"],
  function (ExtensionAPI) {
    "use strict";
    return {
      onInit: function () {
        const oView = this.getView();

        // set busy indicator
        oView.setBusy(true);

        ExtensionAPI.getExtensionAPIPromise(oView).then((oExtensionAPI) => {
          oExtensionAPI.attachPageDataLoaded((_) => {
            // hide edit button
            oView.byId("edit").setVisible(false);

            // hide delete button
            oView.byId("delete").setVisible(false);

            // unset busy indicator
            oView.setBusy(false);
          });
        });
      },
    };
  }
);
