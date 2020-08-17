
const url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=MMqVQEXEFsuN6DmjKGPbOnM7cTqe6hn94ekdewXy`

function main() {
    console.log('DOM is loaded');
  //$('#content-box').append(startMsg);
  
    fetch(url)
      .then(response => response.json())
      .then(responseJson => { console.log(responseJson)
          let image= responseJson.message;

          for(let i=0; i<image.length; i++){
  
      $("#content").append("test"});
  }


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        main();
        });
    }
    
    $(function() {
        console.log('App loaded! Waiting for submit!');
        watchForm();
      });

