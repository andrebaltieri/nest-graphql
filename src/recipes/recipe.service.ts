import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { Recipe } from './models/recipe';
import { RecipesArgs } from './dto/recipe.args';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {
      id: '1234',
      title: 'receita 1',
      description: 'receita 1 desc',
      creationDate: new Date(),
      ingredients: ['ingredient 1', 'ingrediente 2']
    } as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {
      id: '1234',
      title: 'receita 1',
      description: 'receita 1 desc',
      creationDate: new Date(),
      ingredients: ['ingredient 1', 'ingrediente 2']
    } as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [
      {
        id: '1234',
        title: 'receita 1',
        description: 'receita 1 desc',
        creationDate: new Date(),
        ingredients: ['ingredient 1', 'ingrediente 2']
      }
    ] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}