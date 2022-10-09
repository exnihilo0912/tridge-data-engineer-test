from math import floor


class Transformer(object):
  decimal_digits = '0123456789'
  def __init__(self, digits):
    self.digits = digits

  def from_decimal(self, i):
    return self._convert(i, self.decimal_digits, self.digits)

  def to_decimal(self, s):
    return int(self._convert(s, self.digits, self.decimal_digits))

  def _convert(self, number, from_digits, to_digits):
    to_base_size = len(to_digits)
    from_base_size = len(from_digits)

    if len(to_digits) == 10:
      number_as_text = str(number)
      number_size = len(number_as_text)
      total = 0
      for digit_index in range(number_size):
        number_size = number_size - 1
        digit = from_digits.index(number_as_text[digit_index])
        total = total + (digit * (from_base_size ** number_size))
      return total

    else:
      result = number
      result_digit_indexes = []

      while result > 1:
        remainder = result % to_base_size
        result = floor(result / to_base_size)
        result_digit_indexes.insert(0, remainder)

      if result:
        result_digit_indexes.insert(0, result)

      converted_number = ''
      for index in result_digit_indexes:
        converted_number += to_digits[index]
      return converted_number

if __name__ == "__main__":
  binary_transformer = Transformer('01')
  hex_transformer = Transformer('0123456789ABCDEF')
  base62_transformer = Transformer('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz')
  print(base62_transformer.from_decimal(1208))
  print(base62_transformer.to_decimal('ATL'))
  print(hex_transformer.from_decimal(1208))
  print(hex_transformer.to_decimal('4B8'))
  print(binary_transformer.from_decimal(1208))
  print(binary_transformer.to_decimal('10010111000'))
