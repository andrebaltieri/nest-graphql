import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipe.resolver';
import { RecipesService } from './recipe.service';
import { DateScalar } from './scalars/date.scalar';

@Module({
    providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule { }
