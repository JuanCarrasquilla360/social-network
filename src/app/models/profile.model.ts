export interface IProfile {
    name?: string;
    imageProfile?: string;
    dateOfBirth?: string;
    nationality?: string;
    placeResidence?: string
}

export class Profile implements IProfile {
    name?: string;
    imageProfile?: string;
    dateOfBirth?: string;
    nationality?: string;
    placeResidence?: string
    constructor(item?: IProfile) {
        this.name = item?.name || 'No name'
        this.imageProfile = item?.imageProfile || 'assets/images/faces-clipart/pic-1.png'
        this.dateOfBirth = item?.dateOfBirth || ''
        this.nationality = item?.nationality || ''
        this.placeResidence = item?.placeResidence || ''
    }
}