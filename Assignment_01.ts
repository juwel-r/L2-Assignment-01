{
  const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  };

  type Item = {
    title: string;
    rating: number;
  };

  const filterByRating = (items: Item[]): Item[] => {
    const upperFourRating: Item[] = items.filter(
      (item: Item) => item.rating >= 4
    );
    return upperFourRating;
  };

  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const newArray: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      for (let x = 0; x < currentArray.length; x++) {
        newArray.push(currentArray[x]);
      }
    }
    return newArray;
  };

  const processValue = (value: string | number): number => {
    if (typeof value === "string") {
      return value.length;
    }
    if (typeof value === "number") {
      return value * 2;
    } else {
      return 0;
    }
  };

  interface Product {
    name: string;
    price: number;
  }

  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) return null;
    let expensiveProduct: Product = products[0];
    for (const product of products) {
      if (expensiveProduct.price < product.price) {
        expensiveProduct = product;
      }
    }
    return expensiveProduct;
  };

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  const squareAsync = (number: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      if (number < 0) {
        reject("Negative number not allowed");
      } else {
        setTimeout(() => {
          resolve(number * number);
        }, 1000);
      }
    });
  };
}
