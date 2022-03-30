// servira peut etre pour les forms, sinon supprimer tout le dossier
export interface IErrorSerivce{
    get getError(): boolean;
    get getErrorMessage(): string;
    isError(): boolean;
    isNotError(): boolean;
}