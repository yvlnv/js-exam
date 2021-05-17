function whatIDoToday(day, isBankHoliday = false) {
    if (isBankHoliday === true) {
        return "just relax and enjoy";
    } else {
        if (day != "Monday" && day != "Tuesday" && day != "Wednesday"
            && day != "Thursday" && day != "Friday"
            && day != "Saturday" && day != "Sunday") {
            return "there is no such a day, please try again";
        }
        answer = "";
        if (day[0] !== 'S') {
            answer += "read, ";
        } else {
            answer += "walk, ";
        }
        switch (day) {
            case "Monday":
                answer += "3 meetings, cook lunch, do yoga";
                break;
            case "Tuesday":
                answer += "run or walk, 2 meetings";
                break;
            case "Wednesday":
                answer += "run, cook lunch";
                break;
            case "Thursday":
                answer += "run or walk, watch Youtube";
                break;
            case "Friday":
                answer += "1 meeting, cook lunch, dinner with friends";
                break;
            case "Saturday":
                answer += "do yoga, breakfast with friends";
                break;
            case "Sunday":
                answer += "play pub quiz, clean the house";
                break;
        }
        return answer;
    }
}

console.log(whatIDoToday("Monday"));
console.log(whatIDoToday("Monday", true));
console.log(whatIDoToday("Sunay"));
console.log(whatIDoToday("Saturday"));
