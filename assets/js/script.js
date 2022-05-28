// html variables
var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var timeEl = $(".hour");
var descriptionEl = $(".description");
var saveBtnEl = $(".saveBtn");

// starts after events are initialized, creates row content
function main() {
    currentDayEl.text(moment().format("dddd, MMMM Do")); // on start creates up-to-date title at the top
    var maxHours = 8; // standard work day
    var offsetHours = 9; // starts at 9am
// time to create time (so magical)
    for (var hour = offsetHours; hour <= maxHours + offsetHours; hour++) {
    

        // fomrat the time to usable format like 9am or 12pm ect.
        var timeAtIndex = formatMilitaryTime(hour);
        // sets text content on time to the formatted version
        timeEl.textContent = timeAtIndex;

        //if below current time then it's past that time son, color indicator is grey
        if (hour < moment().hour()) {
            descriptionEl.setAttribute("class", "bg-secondary past");
        } else if (hour == moment().hour()) { // if the hour is equivalent then it's that hour, color indicator is red
            descriptionEl.setAttribute("class", "bg-danger present");
        } else { // if anything else it's obviously the future, color indicator is green
            descriptionEl.setAttribute("class", "bg-success future");
        }
        // checks if there's an event at this time slot
        var tempArr = JSON.parse(localStorage.getItem("events"));
        // as loong as it's not empty
        if (tempArr != null) {
            //loop over all saved events
            for (var i = 0; i < tempArr.length; i++) {
                if ((hourEl.textContent == tempArr[i].eventTime) && (moment().dayOfYear() == tempArr[i].dayOfYear)) {
                    descriptionEl.textContent = tempArr[i].eventDescription;
                    descriptionEl.setAttribute("id", "saved-item");
                }
            }
        }
    }

    return;
}

function formatMilitaryTime(hour) {
    var suffix = "";
    // if the hour is over 23 hours reset back to morning
    if (hour > 23) {
        // if midnight make it 12am
        if (hour == 24) {
            hour = 12;
            suffix = "am";
        } else { // if after midnight, it's considered morning so subtract 24
            hour -= 24;
            suffix = "am";
        }
    // anything over nnon subtract 12 to go back to normal format
    } else if (hour > 11) {
        // if it's 12, make it 12pm
        if (hour == 12) {
            hour = 12;
            suffix = "pm";
        } else { // if it's anything after 12 just subtract 12 to get back to norma single digits
            hour += 12;
            suffix = "pm";
        }
        // everything else will be considered normal hours (1-11am) so just add am
    } else {
        suffix = "am";
    }
    // adds the suffix that was chosen
    hour = hour + suffix;

    return hour
}

// on click of button trigger a save event
function saveEventData(event) {
    // if they click the icon
    if (event.target.localName === "img") {
        //reset the target as the button itself
    }
}