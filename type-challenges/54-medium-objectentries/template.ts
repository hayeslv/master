// type ObjectEntries<T> = any

// type ObjectEntries<T> = {
//   [P in keyof T]: [P, T[P]]
// }[keyof T]

type ObjectEntries<T> = keyof T extends infer P 
  ? P extends keyof T 
    ? [P, T[P] extends infer R | undefined 
      ? R 
      : T[P]] 
    : never 
  : never;


// interface Model {
//   name?: string
//   age: number
//   locations: string[] | null
// }
// type p1 = ObjectEntries<Model>
// type p2 = Partial<Model>