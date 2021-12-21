const finalSpace_container = document.getElementById('content_container');
const finalSpace_counts = 47;

const fetchFinalSpace = async () => {
      for(let i=1;i<=finalSpace_counts;i++) {
            await getFinalSpace(i);
      }
}


const getFinalSpace = async id => {
      const url = `https://finalspaceapi.com/api/v0/character/${id}`;
      const res = await fetch(url);
      const finalSpace = await res.json();
      createFinalSpaceCards(finalSpace);
      console.log(finalSpace);
}

const createFinalSpaceCards = finalSpace => {
      const finalspaceEl = document.createElement('div');
      finalspaceEl.classList.add('finalSpace');
      const {id, name, gender, species, img_url} = finalSpace;
      const finalSpaceInnerHTML = `
     
      <div class ="img-container">
            <img src="${img_url}" alt="${name}" />
      </div>
      <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="gender-box">Gender: <span>${gender}</span></small>
      </div>
      <div class="info">
      <small class="type">Species: <span>${species}</span></small>
      </div>
      `;

finalspaceEl.innerHTML = finalSpaceInnerHTML;
content_container.appendChild(finalspaceEl); 

}



fetchFinalSpace();
