function House (numberOfDoors, numberOfWindows) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;
  this.toString = function(){
    // This is a much cleaner, and better solution, via Brett:
    var doorString = (this.numberOfDoors != 1) ? "doors" : "door";
    var windowString = (this.numberOfWindows != 1) ? "windows" : "window";

    return "The house has " + this.numberOfDoors + " " 
    + doorString + " and " + this.numberOfWindows + " "
    + windowString;

    // My original and really verbose solution:
    // if(this.numberOfDoors > 1 && this.numberOfWindows === 1){
    //   return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " window";
    // } else if ((this.numberOfDoors>1 && this.numberOfWindows>1) || (this.numberOfDoors<1 && this.numberOfWindows<1)){
    //   return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " windows";
    // } else if (this.numberOfDoors === 1 && this.numberOfWindows>1){
    //   return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " windows";
    // } else if (this.numberOfDoors===1 && this.numberOfWindows===1){
    //   return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " window";
    // }
  }
}

module.exports = House; // This is a command specific to node