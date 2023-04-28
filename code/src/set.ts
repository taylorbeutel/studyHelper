interface Iset {
    name: string;
    set: {term: string, definition: string}[];

    // public constructor(n: string) {
    //     this.name = n;
    // }

    // public addTerm(term: string, definition: string) {
    //     this.set.push({term, definition});
    // }

    // public getTerms() {
    //     return this.set;
    // }

    // public getName() {
    //     return this.name;
    // }
}

export default Iset;