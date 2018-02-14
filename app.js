angular.module('TLapp', [])
  .controller('TLController', function() {

    var vm = this;

    vm.students = [
      {
      nombre: "nipson",
      asistencias: [0,1,0,1,0,1,0,1,0,1,1,0,1,1,1]
    },
      {
      nombre: "nipson",
      asistencias: [0,1,0,1,0,1,0,1,0,1,1,0,1,1,1]
    },
      {
      nombre: "nipson",
      asistencias: [0,1,0,1,0,1,0,1,0,1,1,0,1,1,1]
    },
      {
      nombre: "nipson",
      asistencias: [0,1,0,1,0,1,0,1,0,1,1,0,1,1,1]
    },
    ];



    vm.dates = [
      {
        name: "2017",
        months: [
          {
            name: "Dic",
            dates:[
              "01",
              "02",
              "03",
              "04",
              "05"
            ]
          }
        ]
      },
      {
        name: "2018",
        months: [
          {
            name: "Ene",
            dates:[
              "01",
              "02",
              "03",
              "04",
              "05"
            ]
          },
          {
            name: "Feb",
            dates:[
              "01",
              "02",
              "03",
              "04",
              "05"
            ]
          }
        ]
      },
    ];

  });
