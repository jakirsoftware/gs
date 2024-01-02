                
const sheets = SpreadsheetApp.openByUrl("Paste your spreadsheet url here");
// The SpreadsheetApp.openByUrl() method opens a Google Sheet using its URL and returns a Spreadsheet object.
// Here, we are storing the Spreadsheet object in the sheets variable.

//if you have changed your sheet name then replace the below Sheet1 with your sheet name
// This comment is a reminder to replace "Sheet1" with the actual name of the sheet you want to use.

const sheet = sheets.getSheetByName("Sheet2");
// The getSheetByName() method returns a sheet object with the given name from the Spreadsheet object.
// Here, we are storing the sheet object in the sheet variable.

function doPost(e){
  // The doPost() function is a special function that is triggered when a HTTP POST request is made to the web app.
  // The function takes a request object as its parameter.

  let data = e.parameter;
  // The parameter property of the request object contains an object of key-value pairs representing the form data.
  // Here, we are storing the form data in the data variable.

  sheet.appendRow([data.name,data.email,data.phone]);
  // The appendRow() method adds a row to the sheet with the given values.
  // Here, we are adding a row to the sheet with the name, email, and phone values from the form data.

  return ContentService.createTextOutput("Success");
  // The ContentService.createTextOutput() method creates a text output object that can be returned to the client.
  // Here, we are returning a "Success" message to the client.
}
                