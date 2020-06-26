let topicsArray = [ //7
    "New Kids on the Block",
    "Going Bananas",
    "Under the Big Top",
    "Off the Hook",
    "Something to Trifle With",
    "Quacking Under Pressure",
    "Camp MasterChef",
    "Pasta Race",
    "Girl Power",
    "Too Corny",
    "The Restaurant Takeover",
    "The Semi-Final",
    "The Finale, Part 1",
    "The Finale, Part 2"
];

let topicsArray2 = [
    "Girls Just Wanna Have Fun",
    "Culinary ABC's",
    "American Classics",
    "Recipe for Love",
    "No Sugar, Sugar",
    "Donut Sweat It",
    "Room Service",
    "Tag Team",
    "Crackin' Under Pressure",
    "A Can Do Attitude",
    "Pop Up Restaurant",
    "Grandma Gordon",
    "The Finale, Part 1",
    "The Finale, Part 2 - The Winner"
];

let topicsArray3 = [
    "The Quest for an Apron Part 1",
    "The Quest for an Apron Part 2",
    "Just Like Gordon",
    "Batter Hurry Up",
    "Kitchen Emergency",
    "A Presidential Mystery Box",
    "Pie-Eyed",
    "Winner, Winner, Chicken Dinner",
    "Scouts Honor",
    "Winter Wonderland",
    "Tag Team",
    "The Muppets Take MasterChef",
    "Pop-Up Restaurant",
    "The Semi Finals",
    "Finale"
];

let topicsArray4 = [
    "New Kids on the Chopping Block",
    "A Sweet Surprise",
    "One Small Step",
    "The Good, the Bad and the Smelly",
    "Happy Birthday",
    "When Life Gives You Lemons",
    "Blind Ambition",
    "Hatching a Plan",
    "Tag Team Time",
    "A Gordon Ramsay Dinner Party",
    "Head of the Class",
    "The Finale"
];

let date1 = [
    "March 12, 2019",
    "March 12, 2019",
    "March 19, 2019",
    "March 26, 2019",
    "April 2, 2019",
    "April 9, 2019",
    "April 16, 2019",
    "April 23, 2019",
    "April 30, 2019",
    "May 7, 2019",
    "May 14, 2019",
    "May 21, 2019",
    "May 28, 2019",
    "June 4, 2019",
    "June 4, 2019"
];

let date2 = [
    "March 2, 2018",
    "March 2, 2018",
    "March 9, 2018",
    "March 16, 2018",
    "March 23, 2018",
    "March 30, 2018",
    "April 6, 2018",
    "April 13, 2018",
    "April 13, 2018",
    "April 20, 2018",
    "April 20, 2018",
    "May 4, 2018",
    "May 4, 2018",
    "May 18, 2018",
    "May 18, 2018"
];

let date3 = [
    "February 9, 2017",
    "February 16, 2017",
    "February 23, 2017",
    "March 2, 2017",
    "March 9, 2017",
    "March 16, 2017",
    "March 23, 2017",
    "March 30, 2017",
    "April 6, 2017",
    "April 13, 2017",
    "April 20, 2017",
    "May 4, 2017",
    "May 11, 2017",
    "May 18, 2017",
    "May 18, 2017"
];

let date4 = [
    "November 6, 2015",
    "November 13, 2015",
    "November 20, 2015",
    "November 27, 2015",
    "December 4, 2015",
    "December 11, 2015",
    "December 18, 2015",
    "January 8, 2016",
    "January 8, 2016",
    "January 15, 2016",
    "January 22, 2016",
    "January 29, 2016"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){

    startDate.setMonth(startMonth-1,startDay);

    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);