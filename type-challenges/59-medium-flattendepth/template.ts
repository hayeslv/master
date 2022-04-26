// type FlattenDepth = any

type FlattenDepth < T extends any[], C extends number = 1, U extends any[] = [] > = 
T extends[infer F, ...infer R] 
  ? F extends any[] 
      ? U['length'] extends C 
          ? [F, ...FlattenDepth < R, C, U > ] 
          : [...FlattenDepth < F, C, [0, ...U] > , ...FlattenDepth < R, C, U > ] 
      : [F, ...FlattenDepth < R, C, U > ] 
  : T;