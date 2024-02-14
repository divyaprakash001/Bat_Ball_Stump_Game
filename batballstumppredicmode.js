function winnerSound(music) {
    audio = new Audio(music);
    audio.play();
}

function cricketMatch(r) {
    let userChoiceMsg = '';
    let randomNumber;
    let computerChoice;
    let audio, music;
    let result;
    let predic;

    predic = document.querySelector('#predic');

    if (predic.checked == false) {

        if (r == 1) {
            userChoiceMsg = 'Bat';
            randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }


            document.querySelector('#user').src = 'images/cricbat.png';

            if (computerChoice === 'Ball') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunshount.mp3';
            } else {
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                resultMsg = '<h1>match tied</h1>'
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }



            winnerSound(music);
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else if (r == 2) {
            userChoiceMsg = 'Ball';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }

            document.querySelector('#user').src = 'images/cricball.png';

            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/gunshount.mp3';
            } else {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
                music = 'sound/Slap.mp3';
            }


            winnerSound(music)
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;



        } else {
            userChoiceMsg = 'Stump';
            randomNumber = Math.floor(Math.random() * 3);
            computerChoice;
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
                document.querySelector('#computer').src = 'images/cricbat.png';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Ball';
                document.querySelector('#computer').src = 'images/cricball.png';
            } else {
                computerChoice = 'Stump';
                document.querySelector('#computer').src = 'images/cricstump.png';
            }
            document.querySelector('#user').src = 'images/cricstump.png';

            let result;
            if (computerChoice === 'Bat') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                music = 'sound/batsound.mp3';
            } else if (computerChoice === 'Stump') {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                music = 'sound/Slap.mp3';
            } else {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
                music = 'sound/gunshount.mp3';
            }

            winnerSound(music);
            document.querySelector('#user').innerHTML = `${userChoiceMsg}`;
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;
            document.querySelector('#result').innerHTML = `${resultMsg}`;


        }
    } else {
        // no predic mode 

    }
}