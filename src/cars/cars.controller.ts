import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { UpdateCarDto } from "./dto/update-car.dto";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller("cars")
//@UsePipes(ValidationPipe)
export class CarsController {
  constructor(
    private readonly carsService: CarsService,
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(":id")
  getCarById(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCardDto: CreateCarDto) {
    return this.carsService.create(createCardDto);
  }

  @Patch(":id")
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateCardDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCardDto);
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
