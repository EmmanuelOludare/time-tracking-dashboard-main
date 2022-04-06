const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');
const workPresent = document.getElementById('work-present');
const workPrevious = document.getElementById('work-previous');
const playPresent = document.getElementById('play-present');
const playPrevious = document.getElementById('play-previous');
const studyPresent = document.getElementById('study-present');
const studyPrevious = document.getElementById('study-previous');
const exercisePresent = document.getElementById('exercise-present');
const exercisePrevious = document.getElementById('exercise-previous');
const socialPresent = document.getElementById('social-present');
const socialPrevious = document.getElementById('social-previous');
const selfCarePresent = document.getElementById('self-care-present');
const selfCarePrevious = document.getElementById('self-care-previous');


const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

  window.onload = load();
  //daily
dailyButton.addEventListener('click',load)
function load(){
   dailyButton.style.opacity = '1';
   weeklyButton.style.opacity = '0.5';
   monthlyButton.style.opacity = '0.5';
   //work
   if(data[0].timeframes.daily.current > 1){
   workPresent.innerHTML = data[0].timeframes.daily.current + 'hrs';
}else{
    workPresent.innerHTML = data[0].timeframes.daily.current + 'hr';
}
    if(data[0].timeframes.daily.previous > 1){
    workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.daily.previous + 'hrs';
 }else{
    workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.daily.previous + 'hr';
 }
 //play 
    if(data[1].timeframes.daily.current > 1){
    playPresent.innerHTML = data[1].timeframes.daily.current + 'hrs';
}else{
     playPresent.innerHTML = data[1].timeframes.daily.current + 'hr';
 }
    if(data[0].timeframes.daily.previous > 1){
     playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.daily.previous + 'hrs';
  }else{
     playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.daily.previous + 'hr';
}
//study
    if(data[2].timeframes.daily.current > 1){
    studyPresent.innerHTML = data[2].timeframes.daily.current + 'hrs';
}else{
     studyPresent.innerHTML = data[2].timeframes.daily.current + 'hr';
}
    if(data[2].timeframes.daily.previous > 1){
     studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.daily.previous + 'hrs';
}else{
     studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.daily.previous + 'hr';
}
//exercise
if(data[3].timeframes.daily.current > 1){
    exercisePresent.innerHTML = data[3].timeframes.daily.current + 'hrs';
}else{
     exercisePresent.innerHTML = data[3].timeframes.daily.current + 'hr';
}
    if(data[3].timeframes.daily.previous > 1){
    exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.daily.previous + 'hrs';
}else{
    exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.daily.previous + 'hr';
}
//social
if(data[4].timeframes.daily.current > 1){
    socialPresent.innerHTML = data[4].timeframes.daily.current + 'hrs';
}else{
    socialPresent.innerHTML = data[4].timeframes.daily.current + 'hr';
}
    if(data[4].timeframes.daily.previous > 1){
    socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.daily.previous + 'hrs';
}else{
    socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.daily.previous + 'hr';
}
//selfCare 
if(data[5].timeframes.daily.current > 1){
    selfCarePresent.innerHTML = data[5].timeframes.daily.current + 'hrs';
}else{
    selfCarePresent.innerHTML = data[5].timeframes.daily.current + 'hr';
}
    if(data[5].timeframes.daily.previous > 1){
    selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.daily.previous + 'hrs';
}else{
    selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.daily.previous + 'hr';
}
};


//weekly
weeklyButton.addEventListener('click',() => {
    weeklyButton.style.opacity = '1';
    monthlyButton.style.opacity = '0.5';
    dailyButton.style.opacity = '0.5';
//work
if(data[0].timeframes.weekly.current > 1){
    workPresent.innerHTML = data[0].timeframes.weekly.current + 'hrs';
}else{
     workPresent.innerHTML = data[0].timeframes.weekly.current + 'hr';
}
     if(data[0].timeframes.weekly.previous > 1){
     workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.weekly.previous + 'hrs';
}else{
     workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.weekly.previous + 'hr';
}
//play 
if(data[1].timeframes.weekly.current > 1){
    playPresent.innerHTML = data[1].timeframes.weekly.current + 'hrs';
}else{
     playPresent.innerHTML = data[1].timeframes.weekly.current + 'hr';
 }
    if(data[0].timeframes.weekly.previous > 1){
     playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.weekly.previous + 'hrs';
  }else{
     playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.weekly.previous + 'hr';
}
//study
    if(data[2].timeframes.weekly.current > 1){
    studyPresent.innerHTML = data[2].timeframes.weekly.current + 'hrs';
}else{
     studyPresent.innerHTML = data[2].timeframes.weekly.current + 'hr';
}
    if(data[2].timeframes.weekly.previous > 1){
     studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.weekly.previous + 'hrs';
}else{
     studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.weekly.previous + 'hr';
}
//exercise
if(data[3].timeframes.weekly.current > 1){
    exercisePresent.innerHTML = data[3].timeframes.weekly.current + 'hrs';
}else{
     exercisePresent.innerHTML = data[3].timeframes.weekly.current + 'hr';
}
    if(data[3].timeframes.weekly.previous > 1){
    exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.weekly.previous + 'hrs';
}else{
    exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.weekly.previous + 'hr';
}
//social
if(data[4].timeframes.weekly.current > 1){
    socialPresent.innerHTML = data[4].timeframes.weekly.current + 'hrs';
}else{
    socialPresent.innerHTML = data[4].timeframes.weekly.current + 'hr';
}
    if(data[4].timeframes.weekly.previous > 1){
    socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.weekly.previous + 'hrs';
}else{
    socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.weekly.previous + 'hr';
}
//selfCare 
if(data[5].timeframes.weekly.current > 1){
    selfCarePresent.innerHTML = data[5].timeframes.weekly.current + 'hrs';
}else{
    selfCarePresent.innerHTML = data[5].timeframes.weekly.current + 'hr';
}
    if(data[5].timeframes.weekly.previous > 1){
    selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.weekly.previous + 'hrs';
}else{
    selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.weekly.previous + 'hr';
}
});




//monthly
monthlyButton.addEventListener('click',() => {
    monthlyButton.style.opacity = '1';
    dailyButton.style.opacity = '0.5';
    weeklyButton.style.opacity = '0.5';
//work
if(data[0].timeframes.monthly.current > 1){
  workPresent.innerHTML = data[0].timeframes.monthly.current + 'hrs';
}else{
   workPresent.innerHTML = data[0].timeframes.monthly.current + 'hr';
}
   if(data[0].timeframes.monthly.previous > 1){
   workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.monthly.previous + 'hrs';
}else{
   workPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[0].timeframes.monthly.previous + 'hr';
}
//play 
if(data[1].timeframes.monthly.current > 1){
  playPresent.innerHTML = data[1].timeframes.monthly.current + 'hrs';
}else{
   playPresent.innerHTML = data[1].timeframes.monthly.current + 'hr';
}
  if(data[0].timeframes.monthly.previous > 1){
   playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.monthly.previous + 'hrs';
}else{
   playPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[1].timeframes.monthly.previous + 'hr';
}
//study
  if(data[2].timeframes.monthly.current > 1){
  studyPresent.innerHTML = data[2].timeframes.monthly.current + 'hrs';
}else{
   studyPresent.innerHTML = data[2].timeframes.monthly.current + 'hr';
}
  if(data[2].timeframes.monthly.previous > 1){
   studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.monthly.previous + 'hrs';
}else{
   studyPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[2].timeframes.monthly.previous + 'hr';
}
//exercise
if(data[3].timeframes.monthly.current > 1){
  exercisePresent.innerHTML = data[3].timeframes.monthly.current + 'hrs';
}else{
   exercisePresent.innerHTML = data[3].timeframes.monthly.current + 'hr';
}
  if(data[3].timeframes.monthly.previous > 1){
  exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.monthly.previous + 'hrs';
}else{
  exercisePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[3].timeframes.monthly.previous + 'hr';
}
//social
if(data[4].timeframes.monthly.current > 1){
  socialPresent.innerHTML = data[4].timeframes.monthly.current + 'hrs';
}else{
  socialPresent.innerHTML = data[4].timeframes.monthly.current + 'hr';
}
  if(data[4].timeframes.monthly.previous > 1){
  socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.monthly.previous + 'hrs';
}else{
  socialPrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[4].timeframes.monthly.previous + 'hr';
}
//selfCare 
if(data[5].timeframes.monthly.current > 1){
  selfCarePresent.innerHTML = data[5].timeframes.monthly.current + 'hrs';
}else{
  selfCarePresent.innerHTML = data[5].timeframes.monthly.current + 'hr';
}
  if(data[5].timeframes.monthly.previous > 1){
  selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.monthly.previous + 'hrs';
}else{
  selfCarePrevious.innerHTML = 'Previous' + ' ' + '-' + ' ' + data[5].timeframes.monthly.previous + 'hr';
}
});

