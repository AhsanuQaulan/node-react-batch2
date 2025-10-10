var filterCarsPromise = require("./promise3.js");

filterCarsPromise("black", 2019)
  .then((cars) => {
    console.log(cars);
  })
  .catch((error) => {
    console.log(error.message);
  });

filterCarsPromise("silver", 2017)
  .then((cars) => {
    console.log(cars);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function getAsyncCars() {
  try {
    const cars = await filterCarsPromise("grey", 2019);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const cars = await filterCarsPromise("grey", 2018);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const cars = await filterCarsPromise("black", 2020);
    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }
}

getAsyncCars();
