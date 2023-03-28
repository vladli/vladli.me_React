import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const btnValues = [
  ["AC", "%", "÷"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const toLocaleString = (num: any) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num: any) => num.toString().replace(/\s/g, "");

const Calculator = (props: Props) => {
  const [calc, setCalc] = useState<any>({
    sign: "",
    number: 0,
    result: 0,
  });
  const numClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.number).length < 16) {
      setCalc({
        ...calc,
        number:
          calc.number === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.number) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.number + value)))
            : toLocaleString(calc.number + value),
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  const commaClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".")
        ? calc.number + value
        : calc.number,
    });
  };

  const signClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.number ? calc.number : calc.result,
      number: 0,
    });
  };

  const equalClickHandler = () => {
    if (calc.sign && calc.number) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        result:
          calc.number === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.result)),
                  Number(removeSpaces(calc.number)),
                  calc.sign
                )
              ),
        sign: "",
        number: 0,
      });
    }
  };

  const percentClickHandler = () => {
    let number = calc.number ? parseFloat(removeSpaces(calc.number)) : 0;
    let result = calc.result ? parseFloat(removeSpaces(calc.result)) : 0;

    setCalc({
      ...calc,
      number: (number /= Math.pow(100, 1)),
      result: (result /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      number: 0,
      result: 0,
    });
  };

  return (
    <div className="flex w-72 flex-col bg-base-100 p-1">
      <div className="flex h-16 w-full items-center justify-end bg-primary pr-2 text-2xl font-semibold">
        {calc.number ? calc.number : calc.result}
      </div>
      <div className="grid grid-cols-4 gap-1 pt-1">
        {btnValues.flat().map((button, i) => {
          return (
            <button
              key={i}
              value={button}
              className={twMerge(
                "flex h-16 cursor-pointer items-center justify-center border bg-base-100 hover:bg-base-300",
                clsx({
                  [`col-span-2`]: button === 0 || button === "AC",
                })
              )}
              onClick={
                button === "AC"
                  ? resetClickHandler
                  : button === "%"
                  ? percentClickHandler
                  : button === "="
                  ? equalClickHandler
                  : button === "÷" ||
                    button === "X" ||
                    button === "-" ||
                    button === "+"
                  ? signClickHandler
                  : button === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
