class Stack{
  constructor(){
    this.arr =[];
  }
  push(data){
    this.arr.push(data);
  }
  //해당되는 인덱스의 값을 꺼내보자
  pop(index){
    if(index === this.arr.length-1){
      return this.arr.pop();
    }
    this.arr
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);


console.log(s);
console.log(s.arr[0]);