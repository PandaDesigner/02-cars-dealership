import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { Car } from "./interfaces/car.interface";
import { from } from "rxjs";
import { CreateCarDto } from "./dto/create-car.dto";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: "Toyota", model: "Corolla" },
    { id: uuid(), brand: "Honda", model: "Civic" },
    { id: uuid(), brand: "Jeep", model: "Cherokee" },
    { id: uuid(), brand: "Chevrolet", model: "Camaro" },
    { id: uuid(), brand: "Nissan", model: "Altima" },
    { id: uuid(), brand: "BMW", model: "X5" },
    { id: uuid(), brand: "Mercedes-Benz", model: "E-Class" },
    { id: uuid(), brand: "Audi", model: "A4" },
    { id: uuid(), brand: "Lexus", model: "RX" },
    { id: uuid(), brand: "Tesla", model: "Model 3" },
    { id: uuid(), brand: "Subaru", model: "Outback" },
    { id: uuid(), brand: "Volkswagen", model: "Jetta" },
    { id: uuid(), brand: "Hyundai", model: "Elantra" },
    { id: uuid(), brand: "Mazda", model: "CX-5" },
    { id: uuid(), brand: "Kia", model: "Sportage" },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    //console.log(this.cars.find((car) => car.id === id));
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }
}
