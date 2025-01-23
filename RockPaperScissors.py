import random
opt=['Rock','Paper','Scissors']
a=input("Enter you option:")
c=random.choice(opt)
print(c)

if(a==c):
    print("Tie")

elif(a=='Scissors' and c=='Rock'):
    print("you won")
elif(a=='Paper' and c=='Rock'):
    print("You Won")
elif(a=='Rock' and c=='Paper'):
    print("You won ")

else:print("Computer won")

