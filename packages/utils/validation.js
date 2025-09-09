export default function validateTodoInput(input) {
  const isEmpty = (v) => !v || v.trim() === "";
  const hasForbiddenSymbols = (v) => /[\d~`№@#$%^&*()+=|\\{}[\]<>]/.test(v);
  const containsBadWords = (v) => {
    const normalized = v.toLowerCase().replace(/\s+/g, " ");
    return /блять|сука|ёбана рот|хуй|хуя|пизда|пизду|дюймовочка/i.test(
      normalized
    );
  };

  const rules = [
    { test: isEmpty, message: "Поле не должно быть пустым" },
    {
      test: hasForbiddenSymbols,
      message: "Поле содержит недопустимые символы",
    },
    { test: containsBadWords, message: "Поле содержит маты" },
  ];

  const failedRule = rules.find(({ test }) => test(input));

  return failedRule
    ? { valid: false, message: failedRule.message }
    : { valid: true };
}
