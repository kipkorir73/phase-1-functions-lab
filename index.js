function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  // Distance from headquarters in feet
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
  }
  
  // Distance traveled in feet
  function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
  }
  
  // Calculates fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }