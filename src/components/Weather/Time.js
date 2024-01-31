export const getTime = (timezoneOffset) => {
    const localTime = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utcTime = localTime + localOffset;
    const cityTime = new Date(utcTime + 1000 * timezoneOffset);
    
    // Get hours, minutes, and seconds separately
    const hours = cityTime.getHours().toString().padStart(2, '0');
    const minutes = cityTime.getMinutes().toString().padStart(2, '0');
    const seconds = cityTime.getSeconds().toString().padStart(2, '0');
  
    // Format the time
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return { time: formattedTime };
  };
  