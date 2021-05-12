# Reading files, making input and output
with open("Input.txt", "r") as input, \
     open('Output.txt','w') as Output:
    data = input.read()
# Enter symbol that you want delete \/
    data = data.replace("-", "")
    #Writing data in Output.txt
    Output.write(data)
