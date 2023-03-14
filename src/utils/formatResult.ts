export const converStringToNum = (num: string) => {
  if (num.indexOf(",") > -1) {
    return Number.parseFloat(num.replace(",", "."));
  } else {
    return Number.parseFloat(num);
  }
};

export const formatNumber = (number: number) => {
  const textNumber = number.toString().replace(".", ",");
  if (textNumber.length < 21 || number < 1) {
    // Если число меньше 0, то добавляем единицу для корректной работы движка JS
    if (number < 1 && number > 0) {
      const result = (+(number + 1).toFixed(15)).toString().replace(".", ",");
      return `0${result.substring(1)}`;
    }
  }
  // Если число содержит степень
  if (textNumber.includes("e")) {
    const [number, pow] = textNumber.split("e");
    const shortNumber =
      Math.round(Number.parseFloat(number.replace(",", ".")) * 100000000000) /
      100000000000;
    return `${shortNumber}e${pow}`;
  }
  return textNumber;
};

export const handleResult = (result: number) => {
  // Если делим на ноль, то выводим "Не определено"
  if (!Number.isFinite(result)) {
    return "Не определено";
  }

  return formatNumber(result);
};
