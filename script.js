var makePolitician = function (name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.tallyUpTotalVotes = function ()
{
  this.totalVotes = 0;
  
  for (var i = 0; i < this.electionResults.length; i++){ 
    this.totalVotes = this.totalVotes + this.electionResults[i];}
  
};
  
  return politician;
};  
  

var homer = makePolitician ("Homer Thafre", [255, 245, 64]);
var peet = makePolitician ("Peet Reat", [239, 64, 255]);


var setStateResults = function (state)
{
      theStates[state].winner = null;
 
    if (homer.electionResults[state] > peet.electionResults[state]) 
      
    { theStates[state].winner = homer; } 
  
  else if (homer.electionResults[state] < peet.electionResults[state]) 
    
    { theStates[state].winner = peet; }
  
  var stateWinner = theStates[state].winner;
  {
   if (stateWinner !== null)
     
     {theStates[state].rgbColor = stateWinner.partyColor;}
   
    else { theStates[state].rgbColor = [11,32,57];}
  }
  
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
  
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = homer.name;
candidate2Name.innerText = peet.name;
 
candidate1Results.innerText = homer.electionResults[state];
candidate2Results.innerText = peet.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
}


homer.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

peet.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

homer.electionResults [9] = 1;
peet.electionResults [9] = 28;
homer.electionResults [4] = 17;
peet.electionResults [4] = 38;
homer.electionResults [43] = 11;
peet.electionResults [43] = 27;


homer.tallyUpTotalVotes();
peet.tallyUpTotalVotes();

var winner = "???";
{
  if (homer.totalVotes > peet.totalVotes) 
  {winner = homer.name;}
    
   else if (peet.totalVotes > homer.totalVotes) 
   {winner = peet.name;}
    
   else {winner = "It's a tie!"}
}

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = homer.name;
row.children[1].innerText = homer.totalVotes;
row.children[2].innerText = peet.name;
row.children[3].innerText = peet.totalVotes;
row.children[5].innerText = winner;

