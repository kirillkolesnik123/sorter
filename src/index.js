class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
   this.funcCompare = (a,b) => {
   return a - b;
   }
  }

  add(element) {
  
    this.arr.push(element);
  
  }

  at(index) {
    // your implementation
     return this.arr[index];
  }

  get length() {
      // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr
  }

  sort(indices) {
    // your implementation
     indices.sort((a,b) => {
   return a - b});

    let temp = [];
    for (let i in indices) {
      temp.push(this.arr[indices[i]]);
    }

    temp.sort(this.funcCompare);

    for(let i = 0; i<indices.length; i++){
      this.arr.splice(indices[i], 1, temp[i]);
    } 
  }


  

  setComparator(compareFunction) {
    // your implementation
     this.funcCompare = compareFunction;
  }
}

module.exports = Sorter;