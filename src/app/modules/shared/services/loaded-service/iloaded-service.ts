// servira peut etre pour les forms, sinon supprimer tout le dossier
export interface ILoadedService {
    get getLoaded(): boolean;
    isLoaded(): boolean;
    isNotLoaded(): boolean;
}