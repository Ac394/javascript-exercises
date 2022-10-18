const findTheOldest = function(people) {
    let lastOne = 0;
    let nextOne = 0;
    const currentYear = new Date().getFullYear();
    const oldest = people.sort(function(a, b) {
      if (!a.yearOfDeath) {
        lastOne = currentYear - a.yearOfBirth;
      } else {
        lastOne = a.yearOfDeath - a.yearOfBirth;
      }
      if (!b.yearOfDeath) {
        nextOne = currentYear - b.yearOfBirth;
      } else {
        nextOne = b.yearOfDeath - b.yearOfBirth;
      }
      return lastOne > nextOne ? -1 : 1;
    })
    return oldest[0]
  };

// Do not edit below this line
module.exports = findTheOldest;
