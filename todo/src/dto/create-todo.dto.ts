export class CreateTodoDto {
    readonly name: string;
    readonly description: string;
    readonly initialDate: Date;
    readonly finalDate: Date;
}