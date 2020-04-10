import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
  public async index (){
    const people = await Person.all()
    return people
  }
  public async store ({request }:HttpContextContract){
    const data = request.only(['nome'])
    const person = await Person.create(data)
    return person
  }
}
