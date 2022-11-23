// // Code your solution in this file!
// const returnFirstTwoDrivers = (drivers) => {
//     return drivers.slice(0,2);
// }
// const returnLastTwoDrivers = ()=>{
//     drivers.slice(-2)
// }


// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function (multiplyValue) {
//     return function (value) {
//       return multiplyValue * value;
//     };
//   };
//   const fareDoubler = createFareMultiplier(2);

//   const fareTripler = createFareMultiplier(3);

//   const selectDifferentDrivers = function (drivers, driversToReturn) {
//     return driversToReturn(drivers);
//   };

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };