sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
  "use strict";
  return UIComponent.extend("myApp.Component", {
    metadata: {
      manifest: "json"
    },
    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
      // Mock data
      var oData = {
        Hierarchy: [
          {
            id: "A1",
            name: "Area 1",
            type: "Area",
            children: [
              {
                id: "B11",
                name: "Bay 1.1",
                type: "Bay",
                children: [
                  {
                    id: "WC111",
                    name: "Workcenter 1.1.1",
                    type: "Workcenter",
                    hoursTarget: 100,
                    numWorkers: 5,
                    hoursCommitment: 80,
                    workOrders: [
                      {
                        seq: 1,
                        hullNo: "H001",
                        orderNo: "ORD001",
                        title: "Repair Hull 1",
                        location: "Dock 1",
                        etcDate: "2025-10-01",
                        targetHours: 20,
                        comments: "Urgent repair",
                        barcode: "ENC_ORD001"
                      },
                      {
                        seq: 2,
                        hullNo: "H002",
                        orderNo: "ORD002",
                        title: "Paint Job 1",
                        location: "Dock 2",
                        etcDate: "2025-10-05",
                        targetHours: 15,
                        comments: "Standard paint",
                        barcode: "ENC_ORD002"
                      }
                    ]
                  },
                  {
                    id: "WC112",
                    name: "Workcenter 1.1.2",
                    type: "Workcenter",
                    hoursTarget: 120,
                    numWorkers: 6,
                    hoursCommitment: 90,
                    workOrders: [
                      {
                        seq: 1,
                        hullNo: "H003",
                        orderNo: "ORD003",
                        title: "Weld 1",
                        location: "Dock 3",
                        etcDate: "2025-10-10",
                        targetHours: 30,
                        comments: "Welding task",
                        barcode: "ENC_ORD003"
                      },
                      {
                        seq: 2,
                        hullNo: "H004",
                        orderNo: "ORD004",
                        title: "Inspect 1",
                        location: "Dock 4",
                        etcDate: "2025-10-15",
                        targetHours: 10,
                        comments: "Inspection",
                        barcode: "ENC_ORD004"
                      },
                      {
                        seq: 3,
                        hullNo: "H005",
                        orderNo: "ORD005",
                        title: "Assembly 1",
                        location: "Dock 5",
                        etcDate: "2025-10-20",
                        targetHours: 25,
                        comments: "Assembly",
                        barcode: "ENC_ORD005"
                      }
                    ]
                  }
                ]
              },
              {
                id: "B12",
                name: "Bay 1.2",
                type: "Bay",
                children: [
                  {
                    id: "WC121",
                    name: "Workcenter 1.2.1",
                    type: "Workcenter",
                    hoursTarget: 140,
                    numWorkers: 7,
                    hoursCommitment: 110,
                    workOrders: [
                      {
                        seq: 1,
                        hullNo: "H006",
                        orderNo: "ORD006",
                        title: "Repair 2",
                        location: "Dock 6",
                        etcDate: "2025-11-01",
                        targetHours: 25,
                        comments: "Comm6",
                        barcode: "ENC_ORD006"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "A2",
            name: "Area 2",
            type: "Area",
            children: [
              {
                id: "B21",
                name: "Bay 2.1",
                type: "Bay",
                children: [
                  {
                    id: "WC211",
                    name: "Workcenter 2.1.1",
                    type: "Workcenter",
                    hoursTarget: 90,
                    numWorkers: 4,
                    hoursCommitment: 70,
                    workOrders: [
                      {
                        seq: 1,
                        hullNo: "H007",
                        orderNo: "ORD007",
                        title: "Paint 3",
                        location: "Dock 7",
                        etcDate: "2025-11-05",
                        targetHours: 18,
                        comments: "Comm7",
                        barcode: "ENC_ORD007"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
      var oDataModel = new JSONModel(oData);
      this.setModel(oDataModel);
      // App model
      var oAppModel = new JSONModel({
        layout: "OneColumn"
      });
      this.setModel(oAppModel, "app");
      // Detail model
      var oDetailModel = new JSONModel({
        workcenters: []
      });
      this.setModel(oDetailModel, "detail");
      // DetailDetail model
      var oDetailDetailModel = new JSONModel({
        workOrders: []
      });
      this.setModel(oDetailDetailModel, "detaildetail");
    }
  });
});