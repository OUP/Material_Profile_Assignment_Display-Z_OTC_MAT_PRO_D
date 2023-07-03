sap.ui.define(
  ["sap/suite/ui/generic/template/extensionAPI/extensionAPI"],
  function (ExtensionAPI) {
    "use strict";
    return {
      onInit: function () {
        const oView = this.getView();

        // set busy indicator
        oView.setBusy(true);

        ExtensionAPI.getExtensionAPIPromise(oView).then((_) => {
          // responsive table
          const oTable = this.byId("listReport");

          // enable export button
          oTable.setUseExportToExcel(true);

          // hide edit button
          oView.byId("addEntry").setVisible(false);

          // hide delete button
          oView.byId("deleteEntry").setVisible(false);

          // unset busy indicator
          oView.setBusy(false);
        });
      },
    };
  }
);
