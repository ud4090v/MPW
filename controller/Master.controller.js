sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("myApp.controller.Master", {
    onInit: function() {
      var oTable = this.byId("treeTable");
      oTable.bindRows({
        path: "/Hierarchy",
        parameters: {
          arrayNames: ["children"]
        }
      });
    },
    onSelectionChange: function(oEvent) {
      var oRowContext = oEvent.getParameter("rowContext");
      if (!oRowContext) {
        return;
      }
      var sPath = oRowContext.sPath;
      var aWorkcenters = this._getSubWorkcenters(sPath);
      this.getOwnerComponent().getModel("detail").setProperty("/workcenters", aWorkcenters);
      this.getOwnerComponent().getModel("app").setProperty("/layout", "TwoColumnsBeginExpanded");
    },
    _getSubWorkcenters: function(sPath) {
      var oModel = this.getView().getModel();
      var oItem = oModel.getProperty(sPath);
      var sType = oItem.type;
      var aWC = [];
      if (sType === "Area") {
        oItem.children.forEach(function(oBay) {
          oBay.children.forEach(function(oWC) {
            aWC.push({
              bay: oBay.name,
              workcenter: oWC.name,
              count: oWC.workOrders ? oWC.workOrders.length : 0,
              hoursTarget: oWC.hoursTarget,
              numWorkers: oWC.numWorkers,
              hoursCommitment: oWC.hoursCommitment,
              workOrders: oWC.workOrders
            });
          });
        });
      } else if (sType === "Bay") {
        var sBayName = oItem.name;
        oItem.children.forEach(function(oWC) {
          aWC.push({
            bay: sBayName,
            workcenter: oWC.name,
            count: oWC.workOrders ? oWC.workOrders.length : 0,
            hoursTarget: oWC.hoursTarget,
            numWorkers: oWC.numWorkers,
            hoursCommitment: oWC.hoursCommitment,
            workOrders: oWC.workOrders
          });
        });
      } else if (sType === "Workcenter") {
        // Get bay path
        var aParts = sPath.split("/");
        aParts.pop(); // remove last index
        aParts.pop(); // remove 'children'
        var sBayPath = aParts.join("/");
        var oBay = oModel.getProperty(sBayPath);
        var sBayName = oBay ? oBay.name : "";
        aWC.push({
          bay: sBayName,
          workcenter: oItem.name,
          count: oItem.workOrders ? oItem.workOrders.length : 0,
          hoursTarget: oItem.hoursTarget,
          numWorkers: oItem.numWorkers,
          hoursCommitment: oItem.hoursCommitment,
          workOrders: oItem.workOrders
        });
      }
      return aWC;
    }
  });
});