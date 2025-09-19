sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("myApp.controller.Detail", {
    onSelectionChange: function(oEvent) {
      var oRowContext = oEvent.getParameter("rowContext");
      if (!oRowContext) {
        return;
      }
      var oItem = oRowContext.getObject();
      var aWorkOrders = oItem.workOrders || [];
      this.getOwnerComponent().getModel("detaildetail").setProperty("/workOrders", aWorkOrders);
      this.getOwnerComponent().getModel("app").setProperty("/layout", "ThreeColumnsMidExpanded");
    }
  });
});