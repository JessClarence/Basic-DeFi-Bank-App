export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addNumber' : IDL.Func([IDL.Float64], [], ['oneway']),
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'subtractNumber' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
