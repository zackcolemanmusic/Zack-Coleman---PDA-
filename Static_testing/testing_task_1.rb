### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1
  return true
  else
  return false
  end
end

#needs to be val == 1.

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

#dif needs to be def, also max (a, b). also an extra end. indentation needs to be correct.

def looper
  for i in 1..10
  puts i
  end
end

#needs correct indentation.

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

# needs an end.


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

# failures is spelt wrong. and else statement is wrong, it needs to be max(100)....


if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

# missing conditional after failures. 
