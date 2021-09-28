export const currenDate = () => {
    const today = new Date();
    
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();

    if(month < 10) {
        month = `0${month}`
    }

    if(day < 10) {
        day = `0${day}`
    }

    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if(hour < 10) {
        hour = `0${hour}`
    }

    if(minutes < 10) {
        minutes = `0${minutes}`
    }

    if(seconds < 10) {
        seconds = `0${seconds}`
    }

    const date = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    return date;
}