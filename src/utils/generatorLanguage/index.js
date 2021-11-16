const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';






//============================RANGE===============================
const rangeLanguageSwitch = require("./const").rangeLanguageSwitch


// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}


function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  getLangSheet(sheets,rangeLanguageSwitch,"common");
  //Read continue if multiple sheet
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1l4OwGFqqUt9EfiHNzjouSvtwFQTCY5RXeyJtQKFNVT4/edit#gid=0
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getLangSheet(sheets, range, namespace) {
  sheets.spreadsheets.values.get(
      {
          spreadsheetId: '1l4OwGFqqUt9EfiHNzjouSvtwFQTCY5RXeyJtQKFNVT4',
          range
      },
      (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
              loadJSON(rows, namespace);
          } else {
              console.log('No data found.');
          }
      }
  );
}

function loadJSON(data, namespace) {
  let data_vi = {};
  let data_en = {};
  // let data_jp = {};


  data.forEach(element => {
    if(element.length){
      data_en[element[0]]=element[1];
      data_vi[element[0]]=element[2];
    }
  });
  fs.writeFileSync('../../lang/vn/'+ namespace +'.json', JSON.stringify(data_vi, null, 4));
  fs.writeFileSync('../../lang/en/'+ namespace +'.json', JSON.stringify(data_en, null, 4));
  console.log(" GENERATOR LANGUAGE SUCCESS !!!")
}
