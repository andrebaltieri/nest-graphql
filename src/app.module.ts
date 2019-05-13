import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
