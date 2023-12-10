import { Controller, Delete, Get, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PersonModel } from "src/models/person.model"
import { Repository } from "typeorm"

@Controller('/person')
export class PersonController {

  constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) {}

  @Post()
  public create() {
    return { data: "create!" }
  }

  @Get()
  public async show(): Promise<{data: PersonModel[]}> {
    const list = await this.model.find()
    return { data: list }
  }

  @Get(':id')
  public showOne() {
    return { data: "showOne!" }
  }

  @Put(':id')
  public update() {
    return { data: "update!" }
  }

  @Delete(':id')
  public delete() {
    return { data: "delete!" }
  }


}