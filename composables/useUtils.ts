export const useUtils = () => {
  const sayHello = () => console.log("Hello from the utils!");
  const sayGoodBye = () => console.log("GoodBye from the utils!");
  return { sayHello, sayGoodBye };
};
