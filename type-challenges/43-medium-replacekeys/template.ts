
// type ReplaceKeys<U, T, Y> = any


type ReplaceKeys<U, T, Y> = U extends [never]
	? never
	: {[P in keyof U]: P extends T
    ? P extends keyof Y
     	? Y[P]
     	: never
    : U[P]}