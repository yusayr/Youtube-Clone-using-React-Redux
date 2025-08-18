import React from 'react'

export const convertRawToString = (labelValue,isSub=false) => {

  const num = Math.abs(Number(labelValue));

  if(num>=1.0e9) {                        //e = 10^x
    return (num/1.0e9).toFixed(0) + "B"; //1500000000
  }
  else if(num>=1.0e6) {
    return (num/1.0e6).toFixed(0) + "M"; //1500000
  }
  else if(num>=1.0e3) {
    return (num/1.0e3).toFixed(isSub? 2:0) + "K"; //1500 = 1.50K
  }
// .toFixed(n) converts the number to a string, keeping n digits after the decimal point.
  
  return num.toString();
}
