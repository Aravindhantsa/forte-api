import {AuthenticationComponent, registerAuthenticationStrategy} from '@loopback/authentication';
import {AuthorizationComponent} from '@loopback/authorization';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication, SecuritySchemeObject} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {JWTAuthenticationStrategy} from './auth-strategies/jwt.strategy';
import {MySequence} from './sequence';
import {JWTService} from './services/jwt-service.service';

export {ApplicationConfig};

export class ForteApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    this.component(AuthenticationComponent);
    registerAuthenticationStrategy(this, JWTAuthenticationStrategy);
    this.component(AuthorizationComponent);
    this.bind('services.JWTService').toClass(JWTService);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.api({
      openapi: '3.0.0',
      info: {
        title: 'User Auth App',
        version: '1.0.0',
      },
      paths: {},
      components: {
        securitySchemes: {
          // 👇 Define JWT (Bearer) authentication scheme
          jwt: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          } as SecuritySchemeObject,
        },
      },
      // 👇 Apply JWT globally (optional)
      security: [{jwt: []}],
    });

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      repositories: {
        dirs: ['repositories'],
        extensions: ['.repository.js'],
        nested: true,
      },
      datasources: {
        dirs: ['datasources'],
        extensions: ['.datasource.js'],
        nested: true,
      },
    };
  }
}
