import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher) => {

    const validpublisher = ['DC Comics','Marvel Comics'];
    if (!validpublisher.includes (publisher)) {
        throw new Error (`${publisher} is not valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}
