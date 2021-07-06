
var names_people=[];

function submit() {
    var guestname=document.getElementById("name1").value;
    names_people.push(guestname);
    console.log(guestname);
    console.log(names_people);
    var lenght_name=names_people.length;
    console.log(lenght_name);
    document.getElementById("display_name").innerHTML=names_people.toString();
}
function sorting() {
    names_people.sort();
    var i = names_people.join("<br>");
    console.log(names_people);
    document.getElementById("sorted").innerHTML=i.toString();
}
function searching() {
    var s = document.getElementById("s1").value;
    var found=0;
    var j;
    for ( j=0; j<names_people.length;j++) {
        if (s==names_people[j]) {
            found=found=1;
        }
    }
    document.getElementById("p1").innerHTML="name found "+found+"time/s";
    console.log("found name"+found+"time/s");
}