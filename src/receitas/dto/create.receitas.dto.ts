// import { IsString, Matches } from 'class-validator';
export class CreateOrUpdateReceitasDto {

    imagem: string;

    // @IsString()
    nomeReceita: string;

    // @IsString()
    descricao: string;

    // @IsString()
    ingredientes: string;

  
//    @Matches(/^[a-zA-Z0-9\s,.]+$/, {
//   message: 'O campo pode conter apenas letras, números, espaços, vírgulas e pontos.',
// })
    modoFazer: string
}