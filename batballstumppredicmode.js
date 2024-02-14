/*
function beepsound(r) {
    let sound, beat;
    if (r == 1) {
        sound = 'sound/batsound.mp3';
    } else if (r == 2) {
        sound = 'sound/gunsount.mp3';

    } else {
        sound = 'sound/slap.mp3';

    }

    beat = new Audio(sound);
    // Play the beat
    beat.play();

    // Pause/stop the beat
    // beat.pause();

    // Reload the beat (back to the start)
    // beat.load();
}
*/



function cricketMatch(r) {
    let userChoiceMsg = '';
    let randomNumber;
    let computerChoice;
    let result;
    let predic;

    if (predic == true) {



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

            let audio, music;
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



            audio = new Audio(music);
            audio.play();
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
            } else if (computerChoice === 'Stump') {
                resultMsg = 'user won';
                document.querySelector('#userwinner').style.display = "block";
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
            } else {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#result').innerHTML = `${resultMsg}`;
            }



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
            } else if (computerChoice === 'Stump') {
                resultMsg = 'match tied';
                document.querySelector('#computerwinner').style.display = "none";
                document.querySelector('#userwinner').style.display = "none";
            } else {
                resultMsg = 'computer won';
                document.querySelector('#userwinner').style.display = "none";
                document.querySelector('#computerwinner').style.display = "block";
            }

            document.querySelector('#user').innerHTML = `${userChoiceMsg}`;
            document.querySelector('#computer').innerHTML = `Computer have choosen ${computerChoice}`;
            document.querySelector('#result').innerHTML = `${resultMsg}`;


        }
    }else{
        // no predic mode 
    }
}