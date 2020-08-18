

const stateCode= $("#state").val();
//const maxResults= $("#checked").val();

const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=10&api_key=MMqVQEXEFsuN6DmjKGPbOnM7cTqe6hn94ekdewXy`;

let store =[]
const main =function() {
  console.log('DOM is loaded');
  //$('#content-box').append(startMsg);

    fetch(url)
      .then(response => response.json())
      .then(results =>{ console.log(results);
        //console.log(results.data.fullName);
    for(let i=0; i<results.data.length; i++){
    const output = {name: results.data[i].fullName};
    //console.log(output);
    store.push(output);
    
    //$("#content").append(`${output.name}`)
       }
       console.log(store);
       return store;
    });
    generateHTML()
    renderList()
  }; 


  
function generateHTML(){
  let html = [];
  for(let i=0; i<store.length; i++){
    html.push(`<li>${store[i].name}</li>`);
  }
  console.log(html);
  return html;
}

function renderList(){
  let html = generateHTML();
  console.log(html);
  $('#content').html(html);
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
      //generateHTML;
    });