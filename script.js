
/* ========== declaring variables by using DOM to choose element on the web_page. ======= */

const btn = document.querySelector('.btn');
      inputHour = document.querySelector('#hour');
      inputMinute = document.querySelector('#min');
      inputSecond = document.querySelector('#sec');
      warning = document.querySelector('.warning');
      displayTimer = document.querySelector('.timer-container');


   
/* ========== adding eventListener of click the start buttion ======= */

btn.addEventListener('click', (e) => {
    e.preventDefault();
/* ========== declaring variables ======= */

    let hour = parseInt(inputHour.value);
        min = parseInt(inputMinute.value);
        sec = parseInt(inputSecond.value);
       
/* ========== Input validation ======= */

        if(parseInt(inputSecond.value) > 60 || parseInt(inputSecond.value) < 0 || parseInt(inputMinute.value) > 60 ||  parseInt(inputMinute.value) < 0 || parseInt(inputHour.value) > 99999 || parseInt(inputHour.value) < 0){

            warning.innerHTML = "Please, enter valid input. Can't take more than 5 digits for hours"; 
            warning.style.padding ='5px';
            setTimeout(() => warning.remove(), 3000);
            inputSecond.value = '0'+0;
            inputMinute.value = '0'+0;
            inputHour.value = '0'+0;
            return; 
        }

/* ========== naming fuction decrease() ======= */

    function decrease(){
        let hours, minuts, seconds

       
/* ========== Ternary oepration of if statement ======= */

        (sec < 10)?(seconds = `0${sec}`) : (seconds = sec);
        (min < 10)?(minuts = `0${min}`) : (minuts = min);
        (hour < 10)?(hours = `0${hour}`) : (hours = hour);

/* ========== displaying the time_remaining in the timer_box ======= */

        let time = hours + ":" +minuts+ ":" + seconds;
        displayTimer.innerHTML = time;

/* ========== for returning hour,minute, and seconds to zero ======= */
        if(hour == 0 && min == 0 && sec == 0){
            return[hour,min,sec];
        }
/* ========== for min to decrease hour ======= */
        if( min == 0 && sec == 0){
            min = 60;
            hour--;
        }
        else if(hour < 0){
            return(hour);            
        }
/* ============ for sec to decrease min ====== */
        if( sec == 0){
            sec = 60;
            min--;
        }
        else if(min < 0){
            return(min);            
        }

        sec--;
        inputHour.value = '';
        inputMinute.value = '';
        inputSecond.value = '';
/* ============ setTimeout function =========== */
       setTimeout(decrease,1000);
    }
/* ======== calling the function ======= */
    decrease();
});