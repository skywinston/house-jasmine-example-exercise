function House (numberOfDoors, numberOfWindows) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;
  this.toString = function(){
    if(this.numberOfDoors > 1 && this.numberOfWindows === 1){
      return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " window";
    } else if ((this.numberOfDoors>1 && this.numberOfWindows>1) || (this.numberOfDoors<1 && this.numberOfWindows<1)){
      return "The house has " + this.numberOfDoors + " doors and " + this.numberOfWindows + " windows";
    } else if (this.numberOfDoors === 1 && this.numberOfWindows>1){
      return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " windows";
    } else if (this.numberOfDoors===1 && this.numberOfWindows===1){
      return "The house has " + this.numberOfDoors + " door and " + this.numberOfWindows + " window";
    }
  }
}

module.exports = House; // This is a command specific to node