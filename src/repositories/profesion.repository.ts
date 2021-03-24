import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Profesion, ProfesionRelations, ProfesionPersona} from '../models';
import {ProfesionPersonaRepository} from './profesion-persona.repository';

export class ProfesionRepository extends DefaultCrudRepository<
  Profesion,
  typeof Profesion.prototype.id,
  ProfesionRelations
> {


  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource
  ) {
    super(Profesion, dataSource);
      }
}
