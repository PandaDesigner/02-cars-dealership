import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: "Toyota", model: "Corolla" },
    { id: 2, brand: "Honda", model: "Civic" },
    { id: 3, brand: "Jeep", model: "Cherokee" },
    { id: 4, brand: "Chevrolet", model: "Camaro" },
    { id: 5, brand: "Nissan", model: "Altima" },
    { id: 6, brand: "BMW", model: "X5" },
    { id: 7, brand: "Mercedes-Benz", model: "E-Class" },
    { id: 8, brand: "Audi", model: "A4" },
    { id: 9, brand: "Lexus", model: "RX" },
    { id: 10, brand: "Tesla", model: "Model 3" },
    { id: 11, brand: "Subaru", model: "Outback" },
    { id: 12, brand: "Volkswagen", model: "Jetta" },
    { id: 13, brand: "Hyundai", model: "Elantra" },
    { id: 14, brand: "Mazda", model: "CX-5" },
    { id: 15, brand: "Kia", model: "Sportage" },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    //console.log(this.cars.find((car) => car.id === id));
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }
}
