let friendIndex = 0;
// We can store related information either in two seperate variables (i.e const name and const image of name), or combined into a singular variable as seen here
const friendList = [
    { name: 'Flurry', image: 'Flurry.webp' }, 
    { name: 'Goldie', image: 'Goldie.png' }, 
    { name: 'Filbert', image: 'Filbert.png' }, 
    { name: 'Isabelle', image: 'Isabelle.png' }
];
//const friendName = [ 'Flurry', 'Goldie', 'Filbert', 'Isabelle']; <-- no longer needed

function previous() {
    friendIndex--;
    if (friendIndex < 0) {
        friendIndex = friendList.length - 1;
    }
    friendFind();
}

function next() {
    friendIndex++;
    if (friendIndex > friendList.length - 1) {
        friendIndex = 0;
    }
    friendFind();
}

function friendFind() {
    document.getElementById('friendImg').src = friendList[friendIndex].image;

}

// Friend info card begins here.

function friendSelect() {
    document.getElementById('passportImage').src = friendList[friendIndex].image;
    document.getElementById('passportName').innerHTML = friendList[friendIndex].name;
    // document.getElementById('passportAbout').innerHTML = friendInfo[friendIndex];

}
