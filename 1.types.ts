// boolean
const isFetching: boolean = false
const isLoading: boolean = Boolean([1, 2, 3].length)


// number
const int: number = 1
const float: number = 3.14
const anotherInt: number = 3e10


// string
const message: string = 'Hello world!'
const string: string = `${123} text`


// arrays
const numberArray: number[] = [1, 2, 3, 4]
const numberArray2: Array<number> = [1, 2, 3, 4]


// tuple
const values: [string, number] = ['str', 123]


// any
const anyValue: any = 12


// function
function getFullName(name: string, lastName: string): string {
    return `${name} ${lastName}`
}

getFullName('Shamil', 'Frontend')


// never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
        console.log('infinite')
    }
}


//


// type
type password = string
const password: password = '12345678'

type ID = string | number
const userId: ID = 99
const gameId: ID = 'game_123'
