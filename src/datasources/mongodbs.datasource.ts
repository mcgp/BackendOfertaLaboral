import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodbs',
  connector: 'mongodb',
  url: 'mongodb+srv://usuarioOfertaLaboral:QuATDIeaH7SLBJtn@cluster0.ajlxn.mongodb.net/test',
  host: 'localhost',
  port: 27017,
  user: 'usuarioOfertaLaboral',
  password: 'QuATDIeaH7SLBJtn',
  database: 'OfertaLaboralBDSec',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodbs';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodbs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
