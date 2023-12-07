
numbersArrayLen3AndMod4 = []

while(True):
    number = int(input())
    if (number % 4 == 0 and (number >= 100 and number <= 999 )):
        numbersArrayLen3AndMod4.append(number)
    if (number == 0):
        break


print((numbersArrayLen3AndMod4))