def calculator
    puts "Simple Calculator"
    puts "-----------------"
  
    print "Enter the first number: "
    num1 = gets.chomp.to_f
  
    print "Enter the second number: "
    num2 = gets.chomp.to_f
#captures the user's input, removes the newline character, and converts it to a floating-point number for further processing in the program.
  
    puts "Select operation:"
    puts "1. Addition"
    puts "2. Subtraction"
    puts "3. Multiplication"
    puts "4. Division"
    print "Enter your choice (1-4): "
    choice = gets.chomp.to_i
  # captures the user's input, removes the newline character, and converts it to an integer for further processing in the program.
    case choice
    when 1
      result = num1 + num2
      operator = "+"
    when 2
      result = num1 - num2
      operator = "-"
    when 3
      result = num1 * num2
      operator = "*"
    when 4
      if num2 == 0
        puts "Error: Cannot divide by zero!"
        return
      end
      result = num1 / num2
      operator = "/"
    else
      puts "Invalid choice!"
      return
    end
  
    puts "-----------------"
    puts "#{num1} #{operator} #{num2} = #{result}" end
  
  # Run the calculator
  calculator
  