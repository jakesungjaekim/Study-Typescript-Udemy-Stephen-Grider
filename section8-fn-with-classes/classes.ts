class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)
// // vehicle.honk(); // Error

//Public은 모든 곳에서 접근이 가능하구나.
//Private는 상속 받은 클래스에서도 접근이 불가능하구나, 그리고 같은 클래스 내에서만 접근이 가능하구나.
//Protected는 상속 받은 클래스에서만 접근이 가능하구나


class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }

  private drive(): void { 
    console.log('vroom vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()

  }
}

const car = new Car(4, 'red');
car.startDrivingProcess()