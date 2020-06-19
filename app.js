document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // Incase of error
  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

  // ReadySate Value
  // 0: Request not initialized
  // 1: Server connection established
  // 2: Request received
  // 3: Processing request
  // 4: Request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}