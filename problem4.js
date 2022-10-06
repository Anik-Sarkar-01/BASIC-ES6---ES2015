/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result.
*/

const evenFriends = (friends) => {
    const evenFriendsName = [];
    for(let i = 0; i<friends.length; i++){
        const nameLength = (friends[i].length);
        if(nameLength % 2 == 0){
            evenFriendsName.push(friends[i]);
        }
    }
    return evenFriendsName;
}
const friendsName = ["Ana", "Rahid" , "Sani" , "Naresh" , "Arnob", "Joya", "puspa", "Arefin"];
const result = evenFriends(friendsName);
console.log(result);
