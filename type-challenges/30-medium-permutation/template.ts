// type Permutation<T> = any

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : (T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : [])



// type P<T> = T extends never ? true : false;
// type A1 = P<never> //never 
// type A2 = P<any> //boolean 

// type Q<T> = [T] extends [never] ? true : false;
// type B1 = Q<never> //true
// type B2 = Q<any> //false