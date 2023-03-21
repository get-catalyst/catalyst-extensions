op = prompt("Do you want to multiply (type mul), divide (type div), add (type add) or subtract (type sub)?")
if (op == "mul") {
  num1 = prompt("What is your first number?")
  num2 = prompt("What is your second number?")
  alert(parseInt(num1) * parseInt(num2))
}
else if (op == "add") {
  num1 = prompt("What is your first number?")
  num2 = prompt("What is your second number?")
  alert(parseInt(num1) + parseInt(num2))
}
else if (op == "div") {
  num1 = prompt("What is your first number?")
  num2 = prompt("What is your second number?")
  alert(parseInt(num1) / parseInt(num2))
}
else if (op == "sub") {
  num1 = prompt("What is your first number?")
  num2 = prompt("What is your second number?")
  alert(parseInt(num1) - parseInt(num2))
}
else {
  alert(op + " is not a valid operator. Do multiply (type mul), divide (type div), add (type add) or subtract (type sub) instead")
}
