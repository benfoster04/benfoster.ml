/* Made by Ben Foster :) 
Feel free to take inspiration but don't copy directly please
*/

// Event Listeners
var elementstofunc = [
    {id: "refresh",
        functions: [
            {
                event: "click",
                action: (param) => {window.location=window.location}
            }]
    }, // Navigation
    {id: "navHome",
        functions: [
            {
                event: "click",
                action: (param) => {window.location="http://benfoster.ml"}
            }]
    },
    {id: "navAV",
        functions: [
            {
                event: "click",
                action: (param) => {window.location="http://benfoster.ml/av"}
            }]
    },
    {id: "navPhotos",
        functions: [
            {
                event: "click",
                action: (param) => {window.location="http://benfoster.ml/photos"}
            }]
    }
];
function events() {
    elementstofunc.forEach((element) => {
        var e = document.getElementById(element.id);
        element.functions.forEach((event) => {
            e.addEventListener(event.event,event.action);
        })
    })
}
